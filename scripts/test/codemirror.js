/**
 * Created by anchao on 2016/1/21.
 */

import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/python/python';

class CMirror {
    init(){
        ReactDOM.render(<TextareaCodeMirror />,$('#codemirror').get(0));
    }
}

class TextareaCodeMirror extends React.Component{
    componentDidMount(){
        CodeMirror.fromTextArea($('.codetextarea').get(0), {
            mode: 'text/x-sql',
            indentWithTabs: true,
            smartIndent: true,
            lineNumbers: true,
            matchBrackets : true,
            autofocus: true,
            extraKeys: {"Ctrl-Space": "autocomplete"},
            hintOptions: {tables: {
                users: {name: null, score: null, birthDate: null},
                countries: {name: null, population: null, size: null}
            }}
        });
    }

    render(){
        return (
            <textarea className="codetextarea" rows="10" cols="30"></textarea>
        );
    }
}

export default CMirror;