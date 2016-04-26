var ExperimentsStore = require('./ExperimentsStore'),
    ExperimentsActions = require('./ExperimentsActions');

module.exports = {

    _updateExperimentsState: function() {
        // This is important so that views listening to the experiments store's change
        // event will see a change in their state and refresh, whether or not they access
        // this.state.experiments directly.
        this.setState({ experiments: ExperimentsStore.getExperiments() });
    },

    isActive: function(experimentName) {
        return ExperimentsStore.isActive(experimentName);
    },

    whenActive: function(experimentName, isActive, notActive) {
        if (this.isActive(experimentName)) {
            return isActive;
        } else {
            return notActive || null;
        }
    }
};
