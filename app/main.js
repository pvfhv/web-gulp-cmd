/**
 * Created by anchao on 2016/5/10.
 */

'use strict';
import Hello from './component.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
// import './main.scss';

// var component = require('./component.js');
// document.body.appendChild(component());
main();

function main() {
    ReactDOM.render(<Hello />,document.querySelector('#app'));
}