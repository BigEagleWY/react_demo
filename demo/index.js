const React = require("react");
const ReactDOM = require("react-dom");

import Test from "../components/test.js";

window.onload = function() {

  var test = document.getElementById("test");
  ReactDOM.render( 
    <Test name='react native' /> ,
    test
  )
}
