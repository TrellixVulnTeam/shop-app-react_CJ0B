import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../helpers';

class Item extends React.Component {
  render() {

    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to order' : 'Sold out!';

    return (
      <li className="menu-item">
        <div>
          
          <h3 className="item-name">
            {details.name}
          </h3>
          <img src={details.image} alt={details.name} />
          <p>{details.desc}</p>
        </div>
        <span className="price">{formatPrice(details.price)}</span>
        <button className="menuBtn" disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
        
        

      </li>
    )
  }
}

Item.propTypes = {
  details: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  index: PropTypes.string.isRequired,
  addToOrder: PropTypes.func.isRequired
}

export default Item;
