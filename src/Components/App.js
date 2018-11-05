import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Item from './Item'
import sampleKicks from '../sample-kicks';
import base from '../base.js';


class App extends React.Component{

 
    constructor() {
      super();
      this.addItem = this.addItem.bind(this);
      this.loadSample = this.loadSample.bind(this);
      this.addToOrder = this.addToOrder.bind(this);
      this.removeFromOrder = this.removeFromOrder.bind(this);
      this.updateItem = this.updateItem.bind(this);
      this.removeItem = this.removeItem.bind(this);

      this.state = {
        items: {},
        order: {}
      }
    }

    // Funkcje reactowe 

    componentWillMount() {

      this.ref = base.syncState(`${this.props.match.params.storeId}/items`
        , {
          context: this,
          state: 'items'
        })

      const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`)

      if(localStorageRef) {
        this.setState({
          order: JSON.parse(localStorageRef)
        })
      }
    }

    componentWillUnmount() {
      base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order))
    }

    
    // Funkcje własne

    addItem(item) {
      const items = {...this.state.items};
      const timeStamp = Date.now();
      items[`kicks-${timeStamp}`] = item;
      this.setState({ items: items});
    }

    updateItem(key, updatedItem) {
      const items = {...this.state.items};
      items[key] = updatedItem;
      this.setState({ items });
    }

    removeItem(key) {
      const items = {...this.state.items};
      items[key] = null;
      this.setState({ items });
    }

    loadSample() {
      this.setState({
        items: sampleKicks
      })
    }

    addToOrder(key) {
      const order = {...this.state.order};
      order[key] = order[key] + 1 || 1;
      this.setState({ order: order});
    }

    removeFromOrder(key) {
      const order = {...this.state.order};
      delete order[key];
      this.setState({ order});
    }


     render() {
         return (
           <Fragment>
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={JSON.stringify(this.props.match.params.storeId) + ' - ONLINE SHOP'}/>   
                    <ul className="list-of-fishes">
                      {
                        Object
                          .keys(this.state.items)
                          .map(key => <Item key={key} index={key} details={this.state.items[key]} addToOrder={this.addToOrder}/>)
                      }
                    </ul>
                </div>
                <div>
                  <Order
                  items={this.state.items}
                  order={this.state.order}
                  params={this.props.match.params}
                  removeFromOrder={this.removeFromOrder}
                  />
                </div>
                <div><Inventory
                  addItem={this.addItem}
                  loadSample={this.loadSample}
                  items={this.state.items}
                  updateItem={this.updateItem}
                  removeItem={this.removeItem}
                  storeId={this.props.match.params.storeId}
                    />

                </div>  


            </div>
            </Fragment>
        )

     }
}

App.propTypes = {
  params: PropTypes.object
}

export default App;
