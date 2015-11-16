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
        $.get(this.props.url,function(oData){
            this.setState({
                data:oData
            });
        }.bind(this),'json');
    }

    handleCommentSubmit(comment){
        return (comment)=>{
            this.setState({
                data:this.state.data.concat([comment])
            });

            //this.loadCommentFromServer();
        }
    }

    render(){
        return (
            <div className="commentbox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit()} />
            </div>
        );
    }
}

class CommentForm extends React.Component{
    handleSubmit(){
        return (e)=>{
            e.preventDefault();
            console.log(e);
            var author=this.refs.author.value.trim();
            var comment=this.refs.commentText.value.trim();

            //提交服务器
            this.props.onCommentSubmit({"author":author,"comment":comment});

            //清空
            this.refs.author.value="";
            this.refs.commentText.value="";


            return;
        }
    }
    render(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit()}>
               <input type="text" ref="author" placeholder="姓名" />
                <input type="text" ref="commentText" placeholder="评论" />
                <input type="submit" value="提交" />
            </form>
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
    handleMouseEnter(author){
        return (e)=>{
            //console.log(e.currentTarget);
            console.log(author);
            //console.log(e.target);
        }
    }

    render(){
        let handleMouseEnter = this.handleMouseEnter;
        return (
            <ul>
                {
                    this.props.data.map(function(obj,index){
                        return (
                           <li author={obj.author} key={index}  onMouseEnter={handleMouseEnter(obj.author)}>{obj.comment+'_'+Date.now()}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

ReactDOM.render(<CommentBox pollInterval={2000} url="../simulates/comment.json" />,$('#first').get(0));