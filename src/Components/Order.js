import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice} from '../helpers'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Order extends React.Component {

    constructor() {
      super();
      this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key){
      const item = this.props.items[key];
      const count = this.props.order[key];
      const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

      if(!item || item.status === 'unavailable') {
        return <li key={key}>Sorry, {item ? item.name : 'kicks'} is no longer available!{removeButton}</li>
      }

      return(
        <li key={key}>
          <span>
            <CSSTransitionGroup
              component="span"
              className="count"
              transitionName="count"
              transitionEnterTimeout={250}
              transitionLeaveTimeout={250}
              >
              <span key={count}>{count}</span>
            </CSSTransitionGroup>
            szt {item.name} {removeButton}
          </span>
          <span className="price">{formatPrice(count * item.price)}</span>
        </li>
      )
    }


    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
          const item = this.props.items[key];
          const count = this.props.order[key];
          const isAvailable = item && item.status === 'available';
          if(isAvailable) {
            return prevTotal + (count * item.price || 0)
          }
          return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
              <h2>Your order</h2>
              <CSSTransitionGroup
                className="order"
                component="ul"
                transitionName="order"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                  {orderIds.map(this.renderOrder)}
                  <li className="total">
                    <p>Total: </p>
                    {formatPrice(total)}
                  </li>
              </CSSTransitionGroup>


            </div>

        )
    }
}

Order.propTypes = {
  items: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
  removeFromOrder: PropTypes.func.isRequired
}

export default Order;
