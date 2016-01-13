/**
 * Created by Administrator on 2015/11/12.
 */

import marked from 'marked';

class Comment extends React.Component {
    rawMarkup() {
        return {__html: marked(JSON.stringify(this.props.children), {sanitize: true})}
    }

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}

ReactDOM.render(<Comment author="alex"><span>good!</span></Comment>,$('#first').get(0));