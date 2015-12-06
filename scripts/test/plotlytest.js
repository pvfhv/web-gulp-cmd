/**
 * Created by Anchao on 2015/12/3.
 */

import plotly from 'plotly.js/dist/plotly';

let json={
    "id": "8391585e51d34a7d9aefbc690980d0b0-output-report-report_0",
    "type": "dataset-dynamic",
    "label": "基于表的自定义report",
    "body": {
        "schema": {
            "fields": [
                {
                    "name": "country",
                    "type": "string"
                },
                {
                    "name": "year",
                    "type": "string"
                },
                {
                    "name": "pop",
                    "type": "long"
                },
                {
                    "name": "continent",
                    "type": "string"
                },
                {
                    "name": "lifeExp",
                    "type": "double"
                },
                {
                    "name": "gdpPercap",
                    "type": "double"
                }
            ]
        },
        "data": {
            "country": [
                "China",
                "China",
                "China",
                "China",
                "China",
                "China",
                "China",
                "China",
                "China",
                "China",
                "China",
                "China"
            ],
            "year": [
                "1952",
                "1957",
                "1962",
                "1967",
                "1972",
                "1977",
                "1982",
                "1987",
                "1992",
                "1997",
                "2002",
                "2007"
            ],
            "pop": [
                556263528,
                637408000,
                665770000,
                754550000,
                862030000,
                943455000,
                1000281000,
                1084035000,
                1164970000,
                1230075000,
                1280400000,
                1318683096
            ],
            "continent": [
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia",
                "Asia"
            ],
            "lifeExp": [
                44,
                50.549,
                44.5014,
                58.3811,
                63.1189,
                63.9674,
                65.525,
                67.274,
                68.69,
                70.426,
                72.028,
                72.961
            ],
            "gdpPercap": [
                400.449,
                575.987,
                487.674,
                612.706,
                676.9,
                741.237,
                962.421,
                1378.9,
                1655.78,
                2289.23,
                3119.28,
                4959.11
            ]
        }
    }
};

let data = [
    {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        x: json.body.data.country,     // more about "x": #scatter-x
        y: json.body.data.year,     // #scatter-y
        marker: {         // marker is an object, valid marker keys: #scatter-marker
            color: 'red' // more about "marker.color": #scatter-marker-color
        }
    },
    {
        type: 'box',      // all "bar" chart attributes: #bar
        x: json.body.data.country,     // more about "x": #bar-x
        y: json.body.data.year,     // #bar-y
        name: 'bar chart example' // #bar-name
    }
];

let layout = {                     // all "layout" attributes: #layout
    title: 'simple example',  // more about "layout.title": #layout-title
    xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
        title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
    },
    annotations: [            // all "annotation" attributes: #layout-annotations
        {
            text: 'simple annotation',    // #layout-annotations-text
            x: 0,                         // #layout-annotations-x
            xref: 'paper',                // #layout-annotations-xref
            y: 0,                         // #layout-annotations-y
            yref: 'paper'                 // #layout-annotations-yref
        }
    ]
}

$('#btn_plotly').click(function(){
    plotly.newPlot('first',data,layout);
});