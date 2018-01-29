/**
 * Created by Anchao on 2015/11/10.
 */

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rx';
import Tools from './common/Tools';
import Immutable from 'immutable';

window.$ = window.jQuery = $;
window.handleConsole={log:$.noop};
window._ = _;
window.Backbone = Backbone;
window.React = React;
window.ReactDOM = ReactDOM;
window.Rx = Rx;
window.Tools = Tools;
window.Immutable=Immutable;
// require('jquery-ui/jquery-ui');
require('bootstrap-sass/assets/javascripts/bootstrap.js');