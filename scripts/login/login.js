/**
 * Created by Anchao on 2015/10/23.
 */
var React=require('react');
var ReactDom=require('react-dom');
var Parent = require('./Parent.jsx');
var $ = require('jquery');
ReactDom.render(<Parent />, document.getElementById('container'));


let a=100;
$('#container').append(a);

