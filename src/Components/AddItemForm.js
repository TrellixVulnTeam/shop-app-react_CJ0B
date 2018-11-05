import React from 'react';
import PropTypes from 'prop-types';

class AddItemForm extends React.Component {

    // funkcja tworząca nowy obiekt item na bazie ref z formularza poniżej
    createItem(event) {
      event.preventDefault();
      const item = {
        name: this.name.value,
        price: this.price.value,
        status: this.status.value,
        desc: this.desc.value,
        image: this.image.value,
      }
      this.props.addItem(item);
      this.itemForm.reset();
    }


    render() {
        return (
            <form ref={(input) => this.itemForm = input} className="fish-edit" onSubmit={(e) => this.createItem(e)}>
              <input ref={(input) => this.name = input} type="text" placeholder="Kicks Name"/>
              <input ref={(input) => this.price = input} type="text" placeholder="Kicks Price"/>
              <select ref={(input) => this.status = input}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold out!</option>
              </select>
              <textarea ref={(input) => this.desc = input} placeholder="Kicks Desc"></textarea>
              <input ref={(input) => this.image = input} type="text" placeholder="Kicks Image"/>
              <button type="submit">+ Add item</button>
            </form>

        )
    }
}

AddItemForm.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default AddItemForm;
