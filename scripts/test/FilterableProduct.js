/**
 * Created by Anchao on 2015/11/26.
 */

var data=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var FilterableProductTable=React.createClass({
    render:function(){

    }
});

var SearchBar=React.createClass({
    render:function(){

    }
});

var ProductTable=React.createClass({
    render:function(){

    }
});

var ProductCategoryRow=React.createClass({
    render:function(){
        var name = this.props.product.stocked?this.props.product.name:
            <span style={{color:red}}>{this.props.product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var ProductRow=React.createClass({
    render:function(){
        return (<tr><td colSpan="2">{this.props.category}</td></tr>)
    }
});