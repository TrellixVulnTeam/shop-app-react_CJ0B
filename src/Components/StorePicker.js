import React from 'react';



class StorePicker extends React.Component{

    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {

        event.preventDefault();
        const storeId = this.storeInput.value;
        this.props.history.push(`store/${storeId}`);
    }


     render() {
         return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <header className="top store-selector-top">
                    <h1>Streetwear</h1>
                    <h3 className="tagline"><span>ONLINE SHOP</span></h3>
                </header>
                
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Name your store"  ref={(input) => {this.storeInput = input}}/>
                <button className="storeButton" type="submit">Visit Store</button>
               
                <div className="store-selector-bottom"> 
                    <p>This is react.js based web application. </p>
                    <p>Insert your new store name to the input field. </p>
                    <p>Your data will be remembered by local storage of your browser as long as it's open.</p>
                    
                </div>

            </form>
        )

     }
}



export default StorePicker;
  