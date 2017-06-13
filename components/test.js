const React = require('react');

class Test extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return <div>
    	<h1>hello {this.props.name}</h1>
    </div>;
  }
}

module.exports = Test;