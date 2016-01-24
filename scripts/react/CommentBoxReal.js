/**
 * Created by Anchao on 2015/11/12.
 */

class CommentBox extends React.Component{
    render(){
        return (
            <div className="commentbox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
            </div>
        );
    }
}

class CommentList extends React.Component{
    render(){
        return (
            <div className="commentList">
                <ul>
                    {this.props.data.map(function(obj,key){
                        return (
                            <li data-author={obj.author} key={key}>{obj.comment}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentBox;