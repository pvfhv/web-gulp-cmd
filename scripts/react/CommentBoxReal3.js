/**
 * Created by Anchao on 2015/11/12.view
 */

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }

    componentDidMount(){
      this.loadCommentFromServer();
      //setInterval(this.loadCommentFromServer.bind(this),this.props.pollInterval);
    }

    loadCommentFromServer(){
        $.getJSON(this.props.url).done((oData)=>{
            this.setState({
                data:oData
            });
        });
    }

    handleCommentSubmit(comment){
        this.setState({
            data:this.state.data.concat([comment])
        });

        //this.loadCommentFromServer();
    }

    render(){
        return (
            <div className="commentbox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
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
    handleMouseEnter(e){
        let oLi = e.target;
        console.log(oLi.getAttribute('data-author'));
    }

    render(){
        return (
            <ul>
                {
                    this.props.data.map((obj,index)=>{
                        return (
                            <li data-author={obj.author} key={index} onClick={this.handleMouseEnter.bind(this)}>{obj.comment+'_'+Date.now()}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

class CommentForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var author=this.refs.author.value.trim();
        var comment=this.refs.commentText.value.trim();

        //提交服务器
        this.props.onCommentSubmit({"author":author,"comment":comment});

        //清空
        this.refs.author.value="";
        this.refs.commentText.value="";
    }

    render(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="author" placeholder="姓名" />
                <input type="text" ref="commentText" placeholder="评论" />
                <input type="submit" value="提交" />
            </form>
        );
    }
}

export default CommentBox;