require('./ExperimentsStore');
require('./experiments');

var DemoPage = require('./DemoPage');
var React = require('react');
var ReactDOM = require('react-dom');

window.onload = function() {
    ReactDOM.render(<DemoPage />, document.getElementById("app"));
};
