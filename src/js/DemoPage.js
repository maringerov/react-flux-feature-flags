var React = require('react'),
    Reflux = require('reflux'),
    ExperimentsStore = require('./ExperimentsStore'),
    ExperimentsActions = require('./ExperimentsActions'),
    ExperimentsMixin = require('./ExperimentsMixin'),
    ControlPanel = require('./ControlPanel'),
    DisplayText = require('./DisplayText');

var DemoPage = React.createClass({

    mixins: [ExperimentsMixin, Reflux.connect(ExperimentsStore, '_updateExperimentsState')],

    btn: function(className) {
        var primaryButtonText;

        if (this.isActive('different-primary-button-text')) {
            primaryButtonText = 'Make it So';
        } else {
            primaryButtonText = 'Make it Happen';
        }

        return (
            <button className={'btn center-block ' + className}>
                {primaryButtonText}
            </button>
        );
    },

    render: function() {
        return (
            <div className="container">
                <h1>Hello, Feature Flags!</h1>
                <div className="row">
                    <div className="col-md-6">
                        <DisplayText />
                    </div>
                </div>
                <div className="row" style={{ 'paddingTop': '10px' }}>
                    {this.whenActive('warning-primary-button',
                                     this.btn('btn-warning'),
                                     this.btn('btn-primary'))}
                </div>
                <ControlPanel />
            </div>
        );
    }
});

module.exports = DemoPage;