/**
 * Created by anchao on 2016/4/22.
 */
import ec from 'echarts';

class EchartTest {
    init() {
        this.bar();
        // this.pie();
        // this.dataZoom();
    }

    bar() {
        //柱状图
        var myChart = ec.init($('#template_test2').get(0));

        myChart.setOption({
            title: {text: '我的第一个图表'},
            tooltip: {},
            legend: {
                data: ["销量"],
                right: 0,
                bottom: 0
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        
        myChart.on('click',function (params) {
           window.open('https://www.baidu.com/s?wd='+encodeURIComponent(params.name));
        });
        
        //图例选择
        myChart.on('legendselectchanged',function (params) {
            var isSelected = params.selected[params.name];
            console.log(isSelected);
            return false;
        });

        if($('#template_test2').is(':hidden')){
            myChart.resize();
        }
    }

    pie() {
        var myChart = ec.init($('#template_test2').get(0));
        myChart.setOption({
            backgroundColor: '#2c343c',
            textStyle: {
                color: 'red'
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                roseType: 'angle',
                radius: '85%',
                label: {
                    normal: {
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'yellow'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetX: 10,
                        shadowOffsetY: 0
                    }
                },
                data: [
                    {
                        name: '搜索',
                        value: 280,
                        itemStyle: {
                            normal: {
                                color: 'pink'
                            }
                        }
                    },
                    {name: '报纸', value: 380},
                    {name: '网络', value: 420},
                    {name: '电视', value: 490},
                    {name: '广播', value: 550}
                ]
            }]
        });
    }

    dataZoom() {
        var myChart = ec.init($('#template_test2').get(0));
        myChart.setOption({
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
                {
                    type: 'slider',
                    xAxisIndex: 0,
                    start: 0,
                    end: 50
                },
                {
                    type: 'inside',
                    xAxisIndex: 0,
                    start: 0,
                    end: 50
                },
                {
                    type: 'slider',
                    yAxisIndex: 0,
                    start: 30,
                    end: 80
                },
                {
                    type: 'inside',
                    yAxisIndex: 0,
                    start: 30,
                    end: 80
                }
            ],
            series: [
                {
                    type: 'scatter',
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    },
                    symbolSize: function (v) {
                        return v[2] * 30;
                    },
                    data: [["14.616", "7.241", "0.896"], ["3.958", "5.701", "0.955"], ["2.768", "8.971", "0.669"], ["9.051", "9.710", "0.171"], ["14.046", "4.182", "0.536"], ["12.295", "1.429", "0.962"], ["4.417", "8.167", "0.113"], ["0.492", "4.771", "0.785"], ["7.632", "2.605", "0.645"], ["14.242", "5.042", "0.368"]]
                }
            ]
        });
    }
}

export default EchartTest;