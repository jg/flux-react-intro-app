var React = require('react');
var Actions = require('../actions/Actions');
var LolcatStore = require('../stores/LolcatStore');


var LolcatBox = React.createClass({
    render: function() {
        return (
                <img src={this.state.src} />
        );
    },
    componentDidMount: function() {
        LolcatStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        LolcatStore.removeChangeListener(this._onChange);
    },
    // listen for 'change' events from LolcatStore
    _onChange: function () {
        this.setState(this.getLolcatBoxState());
    },
    getInitialState: function () {
        return {
            src: ''
        };
    },
    getLolcatBoxState: function () {
        return {
            src: LolcatStore.get()
        };
    }
});

module.exports = LolcatBox;
