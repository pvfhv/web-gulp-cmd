/**
 * Created by Administrator on 2015/11/29.
 */

class LinkedBtn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            liked:false
        };
    }

    handleClick(){
        this.setState({
            liked:!this.state.liked
        },function(){
            console.log('update complete!');
        });
    }

    render(){
        return (
            <input type="button" value={this.state.liked} onClick={this.handleClick.bind(this)} />
        );
    }
}

export default LinkedBtn;