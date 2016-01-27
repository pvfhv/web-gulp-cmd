/**
 * Created by Anchao on 2015/12/2.
 */

//class Fancy extends React.Component{
//    render(){
//        let {checked,...other}=this.props;
//        let clsName=checked?'active':'unactive';
//        return (<div className={clsName} {...other}>hehe</div>);
//    }
//}
//
//Fancy.propTypes={
//    aNames:React.PropTypes.array,
//    age:React.PropTypes.oneOf([12,24]),
//    height:React.PropTypes.arrayOf(React.PropTypes.number),
//    weight:React.PropTypes.objectOf(React.PropTypes.number),
//    name2:React.PropTypes.any.isRequired,
//    hair:function(props,propName,componentName){
//        if(/black/g.test(props[propName])){
//            return new Error('inValid color!');
//        }
//    }
//}
//Fancy.defaultProps ={
//    aNames:[]
//}
//let aNames = ['tom','jerry'];
//ReactDOM.render(<Fancy name2="tom" hair="b1lack2" checked="abc" age={12} height={[175,165]} weight={{man:75,woman:60}} />,$('#first').get(0));


//class Fancy extends React.Component{
//    handleChange(){
//        alert('change');
//    }
//
//    render(){
//        var {checked,title,...other}=this.props;
//        var clsName=checked?'active':'unactive';
//        var te=checked?'x'+title:'O'+title;
//
//        return (
//            <div><input {...other} type="checkbox" className={clsName} onChange={this.handleChange.bind(this)} checked={checked}/>{title}</div>
//        );
//    }
//}
//
//ReactDOM.render(<Fancy checked="true" title="abc" name="tom" />,$('#first')[0]);

//var Fancy = React.createClass({
//    render: function() {
//        var checked = this.props.checked;
//        var other = _.omit(this.props, 'checked');
//        var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
//        return (
//            React.DOM.div(_.extend({}, other, { className: fancyClass }),null,'abc')
//        );
//    }
//});
//
//ReactDOM.render(<Fancy checked={true} title="test" onMouseEnter={console.log.bind(console)} />,document.querySelector('#first'));


class SingleChild extends React.Component{
    render(){
        return (
            <div>{this.props.children}{this.props.name}</div>
        );
    }
}

SingleChild.propTypes={
    children:React.PropTypes.element.isRequired
}

SingleChild.defaultProps={
    name:'tom'
}

export {SingleChild};