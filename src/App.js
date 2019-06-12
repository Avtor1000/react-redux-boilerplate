import React from 'react';
import store from "./redux"
import './App.css';
import Root from "./components/Root";
import {Provider} from "react-redux";
import {history} from "./redux"
import {ConnectedRouter} from "connected-react-router";
import {Switch} from "react-router-dom";
import "./config"

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Root/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
