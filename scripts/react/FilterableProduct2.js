/**
 * Created by Administrator on 2015/11/27.
 */
var data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleUserChange(filterText,inStockOnly){
        this.setState({
            filterText:filterText,
            inStockeOnly:inStockOnly
        });
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onUserChange={this.handleUserChange.bind(this)} />
                <ProductTable products={data} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}

class SearchBar extends React.Component{
    handleChange (){
        this.props.onUserChange(this.refs.searchText.value,this.refs.stockCheckbox.checked);
    }

    render(){
        return (
            <form>
                <input type="text" value={this.props.filterText} ref="searchText" onChange={this.handleChange.bind(this)} />
                <p>
                    <input type="checkbox" ref="stockCheckbox" onChange={this.handleChange} />
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class ProductCategoryRow extends React.Component{
    render(){
        return (
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        );
    }
}

class ProductRow extends React.Component{
    render () {
        var name = this.props.product.stocked ? this.props.product.name :
            <span style={{color:'red'}}>{this.props.product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component{
    render() {
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
}

ReactDOM.render(<FilterableProductTable />, $('#first').get(0));