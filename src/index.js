import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import { Provider } from "react-redux";

import store from "./store";

const Index = () => {
  return <Provider store={store}><App/></Provider>;
        
};

ReactDOM.render(<Index />, document.getElementById("index"));