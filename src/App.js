import React, { Component } from "react";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "../";
import firebase from "@firebase/app";
import "@firebase/database";
import "@firebase/auth";
import ReduxThunk from "redux-thunk";

export default class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyC4kpzxiAJs4ZtUjeSPtVV4ll6WLlbG9x4",
      authDomain: "whatsapp-clone-353a6.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-353a6.firebaseio.com",
      projectId: "whatsapp-clone-353a6",
      storageBucket: "whatsapp-clone-353a6.appspot.com",
      messagingSenderId: "963543845499",
      appId: "1:963543845499:web:aafedcc272afcdd8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
