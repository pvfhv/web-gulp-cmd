/**
 * Created by Anchao on 2015/11/12.
 */

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }

    componentDidMount(){
        $.getJSON(this.props.url).done(function(oData){
            this.setState({
                data:oData
            });
        }.bind(this))
    }

    render(){
        return (
            <div className="commentbox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
            </div>
        );
    }
}

class CommentList extends React.Component{
    render(){
        return (
            <div className="commentList">
                <Comment data={this.props.data}></Comment>
            </div>
        )
    }
}

class Comment extends React.Component{
    render(){
        return (
            <ul>
                {
                    this.props.data.map(function(obj,index){
                        return (
                           <li data-author={obj.author} key={index}>{obj.comment}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default CommentBox;