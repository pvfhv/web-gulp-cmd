/**
 * Created by Anchao on 2015/11/27.
 */
var data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var FilterableProductTable = React.createClass({
    getInitialState:function(){
        return {
            filterText:'',
            inStockOnly:false
        }
    },
    handleUserChange:function(filterText,inStockOnly){
        this.setState({
            filterText:filterText,
            inStockeOnly:inStockOnly
        });
    },
    render: function () {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onUserChange={this.handleUserChange} />
                <ProductTable products={data} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
});

var SearchBar=React.createClass({
    handleChange:function (){
        this.props.onUserChange(this.refs.searchText.value,this.refs.stockCheckbox.checked);
    },
    render:function(){
        return (
            <form>
                <input type="text" value={this.props.filterText} ref="searchText" onChange={this.handleChange} />
                <p>
                    <input type="checkbox" ref="stockCheckbox" onChange={this.handleChange} />
                    Only show products in stock
                </p>
            </form>
        );
    }
});

var ProductCategoryRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        );
    }
});

var ProductRow = React.createClass({
    render: function () {
        var name = this.props.product.stocked ? this.props.product.name :
            <span style={{color:'red'}}>{this.props.product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
    render: function () {
        //var rows = [];
        //var lastCategory = null;
        //this.props.products.forEach(function (product) {
        //    if (product.category !== lastCategory) {
        //        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
        //    }
        //    rows.push(<ProductRow product={product} key={product.name}/>);
        //    lastCategory = product.category;
        //});
        var rows=[];
        var lastCategory=null;
        for(var product of this.props.products){
            if(product.name.indexOf(this.props.filterText)==-1||(!product.stocked&&this.props.inStockOnly)){
                continue;
            }

            if(product.category!=lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory=product.category;
        }

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
});

ReactDOM.render(<FilterableProductTable />, $('#first').get(0));