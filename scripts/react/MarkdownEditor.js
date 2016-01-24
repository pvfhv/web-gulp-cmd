/**
 * Created by Administrator on 2015/11/12.
 */

import marked from 'marked';

//外部插件
//var MarkdownEditor = React.createClass({
//    getInitialState: function() {
//        return {value: 'Type some *markdown* here!'};
//    },
//    handleChange: function(e) {
//        this.setState({value: e.target.value});
//    },
//    rawMarkup: function() {
//        return { __html: marked(this.state.value, {sanitize: true}) };
//    },
//    render: function() {
//        return (
//            <div className="MarkdownEditor">
//                <h3>Input</h3>
//        <textarea
//            onChange={this.handleChange}
//            ref="textarea"
//            defaultValue={this.state.value} />
//                <h3>Output</h3>
//                <div className="content"
//                    dangerouslySetInnerHTML={this.rawMarkup()}
//                />
//            </div>
//        );
//    }
//});

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请输入markdown格式的文本'
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <textarea placeholder={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
                <h3>Output</h3>
                <div className="content" dangerouslySetInnerHTML={{__html: marked(this.state.value,{sanitize: true})}} />
            </div>
        );
    }
}

export default MarkdownEditor;