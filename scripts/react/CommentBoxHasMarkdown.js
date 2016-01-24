/**
 * Created by Administrator on 2015/11/12.
 */

import marked from 'marked';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: marked(JSON.stringify(this.props.children), {sanitize: true})}} />
            </div>
        );
    }
}

export default Comment;