var Child = require('./Child.jsx');

var Parent = React.createClass({
    handlerClick:function(){
      window.history.forward();
    },
    render: function(){
        return (
            <div>
                <div><input type="button" onClick={this.handlerClick} value="前进" /></div>
                <Child/>
            </div>
        )
    }
});

module.exports = Parent;