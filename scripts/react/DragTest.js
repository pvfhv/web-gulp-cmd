/**
 * Created by anchao on 2016/5/24.
 */
let DragTest = React.createClass({
    getInitialState:function () {
      return {
          left:0,
          top:0,
          disX:0,
          disY:0
      }
    },
    dragStart:function (e) {
        let $target = $(e.currentTarget);
        let disX = e.pageX - $target.position().left;
        let disY = e.pageY - $target.position().top;

        this.setState({
            disX:disX,
            disY:disY
        });
        $(document)
            .on('mousemove.temp',function (e) {
            let left = e.pageX - this.state.disX;
            let top = e.pageY - this.state.disY;

            this.setState({
                left:left<0?0:left,
                top:top<0?0:top
            });
        }.bind(this))
            .on('mouseup.temp',function () {
                $(this).off('.temp');
            });
    },
    dragMove:function (e) {

    },
    render:function () {

        return (
            <div className="candrag" style={{left:this.state.left,top:this.state.top}} onMouseDown={this.dragStart}>我能被拖拽</div>
        )
    }
});

export default DragTest;