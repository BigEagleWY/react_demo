var React = require('react');

class Clock extends React.Component {

    constructor(...args) {
        super(...args);
        var self = this;
        this.state = {
            h: 0,
            m: 0,
            s:0
        };
        setInterval(function(){
            self.trick();
        },1000);
    }
    componentWillMount(){
        this.setState({
            h: this.formateTime(new Date().getHours()),
            m: this.formateTime(new Date().getMinutes()),
            s: this.formateTime(new Date().getSeconds())
        });
    }
    formateTime(number) {
        var n = parseInt(number);
        if (n < 10) {
            return '0' + n;
        } else {
            return n;
        }
    }
    trick(){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        this.setState({
            h:this.formateTime(hour),
            m:this.formateTime(minute),
            s:this.formateTime(second)
        });
    }
    render() {
        return <div>
            <h2>{this.state.h}:{this.state.m}:{this.state.s}</h2> 
        </div>;
    }


}

module.exports = Clock;