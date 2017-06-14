const React = require("react");
const ReactDOM = require("react-dom");

import Test from "../components/test.js";
import Clock from "../components/clock.js";
import Touch from "../components/touch.js";

window.onload = function() {

  var test = document.getElementById("test");
  var clock = document.getElementById("clock");
  var touch = document.getElementById("touch");
  ReactDOM.render( 
    <Test name='react native' /> ,
    test
  );
  ReactDOM.render(
    <Clock />,
    clock
  );
  ReactDOM.render(
    <Touch />,
    touch
  );

}
