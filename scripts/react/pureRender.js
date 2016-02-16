/**
 * Created by anchao on 2016/2/16.
 */
import PureRenderMixin from 'react-addons-pure-render-mixin';

var TestPureRender = React.createClass({
    mixins: [PureRenderMixin],
    render: function () {
        return (
            <div className={this.props.className}>不变的内容</div>
        );
    }
});

module.exports = TestPureRender;