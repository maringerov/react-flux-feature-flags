// Global access from client-side JavaScript

var ExperimentsActions = require('./ExperimentsActions'),
    ExperimentsStore = require('./ExperimentsStore');

if (typeof(window) === 'object') {
    window.Experiments = {
        activate: function(experimentName) {
            ExperimentsActions.activate(experimentName);
        },

        deactivate: function(experimentName) {
            ExperimentsActions.deactivate(experimentName);
        }
    };
}
