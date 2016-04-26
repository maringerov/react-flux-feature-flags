var React = require('react'),
    Reflux = require('reflux'),
    ExperimentsMixin = require('./ExperimentsMixin'),
    ExperimentsActions = require('./ExperimentsActions'),
    ExperimentsStore = require('./ExperimentsStore');

module.exports = React.createClass({
    displayName: 'ControlPanel',

    mixins: [Reflux.connect(ExperimentsStore, this._updateExperimentsState)],

    toggleExperiment: function(experiment) {
        return function(e) {
            // More idiomatic Flux would put these into the 'actions' but introducing
            // those is a little elaborate for an admin control panel
            if (e.target.checked) {
                ExperimentsActions.activate(experiment);
            } else {
                ExperimentsActions.deactivate(experiment);
            }
        }
    },

    checkbox: function(experiment) {
        var style = {
            // awful but w/e
            display: 'inline !important',
            'paddingLeft': '10px'
        };

        return (
            <span className="checkbox" style={style} key={experiment}>
               <label>
                   <input type="checkbox"
                          name={experiment}
                          onClick={this.toggleExperiment(experiment)}>
                   </input>
                   {experiment}
               </label>
            </span>
        );
    },

    render: function() {
        var style = {
            position: 'fixed',
            backgroundColor: '#faebe4',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px'
        };

        return (
            <div style={style}>
              {Object.keys(ExperimentsStore.getExperiments()).map(function (experiment) {
                  return this.checkbox(experiment);
              }, this)}
            </div>
        );
    }
});
