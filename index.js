const React = require("react");
const ReactDOM = require("react-dom");

import Test from "./test.js";

window.onload = function() {

  var test = document.getElementById("test");
  ReactDOM.render( 
    <Test /> ,
    test
  )
}
