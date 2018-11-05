import Rebase from 're-base';
import firebase from 'firebase';

// const base = Rebase.createClass({
//
//    apiKey: "AIzaSyCJ3wsTdl9pPOEPSQMsjRi9ayRXgkgXFzY",
//    authDomain: "sklep-patryk-kepa.firebaseapp.com",
//    databaseURL: "https://sklep-patryk-kepa.firebaseio.com",
//
// });
//
// export default base;


const config = {
  apiKey: "AIzaSyCJ3wsTdl9pPOEPSQMsjRi9ayRXgkgXFzY",
  authDomain: "sklep-patryk-kepa.firebaseapp.com",
  databaseURL: "https://sklep-patryk-kepa.firebaseio.com",

};

const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database());


export default base;
