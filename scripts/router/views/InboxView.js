/**
 * Created by anchao on 2016/7/24.
 */
const InboxView = React.createClass({
    render:function () {
        return (
            <div>
                <div className="title">标题</div>
                <div className="ullist">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
});

export default InboxView;