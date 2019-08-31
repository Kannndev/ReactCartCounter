import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";

/** 
 * The below method is a example of custom middle ware.
const logAction = store => {
  return next => {
    // next is dispatch method in redux here
    return action => {
      // in action we get action we pass in dispatch method
      // we can perform the operations we need here and call next action so that it passes to the reducer.
      return next(action);
    };
  };
};

const store = createStore(reducer, applyMiddleware(logAction));
*/

// Redux thunk middle ware
// async actions in dispatch events are only possible with custom middleware like thunk and saga
// If we dont use thunk an error will be thrown if there is an async code in our action.
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
