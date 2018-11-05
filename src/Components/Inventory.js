import React from 'react';
import PropTypes from 'prop-types';
import AddItemForm from './AddItemForm';

class Inventory extends React.Component {

    constructor() {
      super();
      this.renderInventory = this.renderInventory.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        uid: null,
        owner: null
      }
    }



    handleChange(e, key) {
      const item = this.props.items[key];
      const updatedItem = {
        ...item,
        [e.target.name]: e.target.value
      }
      this.props.updateItem(key, updatedItem);
    }

    renderInventory(key) {
      const item = this.props.items[key];

      return(
        <div className="fish-edit" key={key}>
          <input value={item.name} type="text" name="name" placeholder="Kicks Name" onChange={(e) => this.handleChange(e, key)}/>
          <input value={item.price} type="text" name="price" placeholder="Kicks Price" onChange={(e) => this.handleChange(e, key)} />
          <select value={item.status}name="status" onChange={(e) => this.handleChange(e, key)} >
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold out!</option>
          </select>
          <textarea value={item.desc} name="desc" placeholder="Kicks Desc" onChange={(e) => this.handleChange(e, key)} ></textarea>
          <input value={item.image} type="text" name="image" placeholder="Kicks Image" onChange={(e) => this.handleChange(e, key)} />
          <button onClick={() => this.props.removeItem(key)}>Remove</button>

        </div>
      )
    }

    render() {
        return (
          <div>
            <h2>Inventory</h2>
            <div>
            <button className="inventoryBtn" type="submit" onClick={this.props.loadSample}>Load sample Shoes</button>
            </div>
            {Object.keys(this.props.items).map(this.renderInventory)}
            <AddItemForm addItem={this.props.addItem} />
            
          </div>



        )
    }
}

Inventory.propTypes = {
updateItem: PropTypes.func.isRequired,
removeItem: PropTypes.func.isRequired,
items: PropTypes.object.isRequired,
addItem: PropTypes.func.isRequired,
loadSample: PropTypes.func.isRequired,
storeId: PropTypes.string.isRequired
}

export default Inventory;
