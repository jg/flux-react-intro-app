var React = require('react');
var Actions = require('../actions/Actions');

var MenuItem = React.createClass({
  render: function() {
    var activeClass = this.props.active ? 'is-active' : ''
    return (
      <li>
        <a href="#" className={activeClass} onClick={this.handleClick}>
          {this.props.title}
        </a>
      </li>
    );
  },
  handleClick: function () {
    this.props.clickHandler(this.props);
  }
});

module.exports = MenuItem;
