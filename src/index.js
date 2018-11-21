
import React from 'react';
import { render }from 'react-dom';

import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';


import StorePicker from './Components/StorePicker';
import App from './Components/App';

import './css/style.css';



const Routes = props => {
  return (
      
    <HashRouter  basename="/shop-app-react/">
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
      </Switch>
    </HashRouter>

  )
}

 
render(<Routes />, document.getElementById('root'));

 