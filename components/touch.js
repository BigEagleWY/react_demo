var React = require("react");

class Touch extends React.Component {

    constructor(...args) {
        super(...args);
        this.state={
            left:0,
            top:0
        }
    }
    drag(event){
        var x = event.pageX-this.state.left;
        var y = event.pageY-this.state.top;
        var self = this;
        document.onmousemove = function(event){
            self.setState({
                left:event.pageX-x,
                top:event.pageY-y
            });
        }
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
    render(){
        return <div style={{left:this.state.left+"px",top:this.state.top+"px"}} onMouseDown={this.drag.bind(this)}>
            </div>;
    }


}

module.exports = Touch;