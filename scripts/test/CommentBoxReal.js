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
                <Comment data={this.props.data}></Comment>
            </div>
        )
    }
}

class Comment extends React.Component{
    render(){
        return (
            <ul>
                {this.props.data.map(function(obj,key){
                    return (
                        <li author={obj.author} key={key}>{obj.comment}</li>
                    );
                })}
            </ul>
        );
    }
}


var data=[{author:'alex',comment:'good'},{author:'tom',comment:'better'}];
ReactDOM.render(<CommentBox data={data} />,$('#first').get(0));