const React = require('react');

class Test extends React.Compoent {
  constructor(...args) {
    super(...args);
  }

  render() {
    return <h1 > hello react < /h1>;
  }
}

window.onload = function() {

  var $test = document.getElementById("test");
  ReactDOM.render( <
    Test / > ,
    $test
  )
}
