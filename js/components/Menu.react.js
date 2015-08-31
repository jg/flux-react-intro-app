var React = require('react');
var Actions = require('../actions/Actions');
var MenuItem = require('./MenuItem.react');

var Menu = React.createClass({
    render: function() {
        var rows = [];
        var clickHandler = this.clickHandler;
        var self = this;
        this.props.items.forEach(function (item) {
            rows.push(<MenuItem id={item.id} title={item.title}
                                    active={self.isActive(item)}
                                    src={item.src}
                                    clickHandler={clickHandler}
                      />)
        });
        
        return (<ul> {rows} </ul>);
    },
    getInitialState: function () {
        return { activeId: null };
    },
    isActive: function(item) {
        return item.id == this.state.activeId
    },
    clickHandler: function (menuItem) {
        this.setState({activeId: menuItem.id});
        Actions.addLolcat(menuItem.src);
    }
});

module.exports = Menu;
