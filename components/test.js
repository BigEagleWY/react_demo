const React = require('react');

class Test extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      msg:'how are you'
    };
  }
  talk(){
    this.setState({
      msg:'I am fine'
    });
  }

  render() {
    return <div>
    	<h1>hello {this.props.name}</h1>
      <h2>{this.state.msg}</h2>
      <button onClick={this.talk.bind(this)}>点击进行对话</button>
    </div>;
  }
}

module.exports = Test;