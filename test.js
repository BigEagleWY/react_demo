const React = require('react');

class Test extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return <div>
    	<h1>hello react</h1>
    </div>;
  }
}

module.exports = Test;