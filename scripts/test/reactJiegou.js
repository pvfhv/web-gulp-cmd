/**
 * Created by Anchao on 2015/12/2.
 */

//class Fancy extends React.Component{
//    constructor(props){
//        super(props);
//
//        this.render=()=>{
//            let {checked,...other}=this.props;
//            let clsName=checked?'active':'unactive';
//            return (<div className={clsName} {...other}>hehe</div>);
//        };
//    }
//}


//class Fancy extends React.Component{
//    constructor(props){
//        super(props);
//
//        this.handleChange=()=>{
//          alert('change');
//        };
//        this.render=()=>{
//          var {checked,title,...other}=this.props;
//          var clsName=checked?'active':'unactive';
//          var te=checked?'x'+title:'O'+title;
//
//          return (
//              <div><input {...other} type="checkbox" className={clsName} onChange={this.handleChange} checked={checked}/>{title}</div>
//          );
//        };
//    }
//}

var Fancy = React.createClass({
    render: function() {
        var checked = this.props.checked;
        var other = _.omit(this.props, 'checked');
        var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
        return (
            React.DOM.div(_.extend({}, other, { className: fancyClass }))
        );
    }
});

ReactDOM.render(<Fancy checked={true} title="test" onMouseEnter={console.log.bind(console)} />,document.querySelector('#first'));