var Reflux = require('reflux');
var ExperimentsActions = require('./ExperimentsActions.js');

var ExperimentsStore = Reflux.createStore({
  listenables: [ExperimentsActions],

  experiments: {
    'warning-primary-button': false,
    'different-primary-button-text': false,
    'extra-text': false
  },

  isActive: function(experimentName) {
    return !!this.experiments[experimentName];
    this.trigger(this.experiments);
  },

  onActivate: function(experimentName) {
    this.experiments[experimentName] = true;
    this.trigger(this.experiments);
  },

  onDeactivate: function(experimentName) {
    this.experiments[experimentName] = false;
    this.trigger(this.experiments);
  },

  getExperiments: function() {
    return this.experiments;
    this.trigger(this.experiments);
  }
});

module.exports = ExperimentsStore;
