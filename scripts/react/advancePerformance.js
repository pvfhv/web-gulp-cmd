/**
 * Created by anchao on 2016/2/17.
 */

//let TestImmutable = React.createClass({
//    getInitialState: function () {
//        return {value: {foo: 'bar'}};
//    },
//    onClick: function () {
//        let value = this.state.value;
//        value.foo += 'bar';
//        this.setState({value: value})
//    },
//    render: function () {
//        return (
//            <div>
//                <InnerComponent value={this.state.value}/>
//                <input type="button" value="修改state的值" onClick={this.onClick}/>
//            </div>
//        );
//    }
//});

let TestImmutable = React.createClass({
    getInitialState: function () {
        let someRecord = Immutable.Record({foo:'bar'});
        let x = new someRecord();
        return {value: x};
    },
    onClick: function () {
        let value = this.state.value;
        let y = Immutable.Record({foo:value.get('foo')+'bar'});
        this.setState({value: y})
    },
    render: function () {
        return (
            <div>
                <InnerComponent value={this.state.value}/>
                <input type="button" value="修改state的值" onClick={this.onClick}/>
            </div>
        );
    }
});

class InnerComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextStates) {
        console.log(`this.props=${JSON.stringify(this.props)},nextProps=${JSON.stringify(nextProps)}`);
        return this.props.value != nextProps.value;
    }

    render() {
        let sJson = JSON.stringify(this.props.value);
        return (
            <div>{sJson}</div>
        );
    }
}

module.exports = TestImmutable;