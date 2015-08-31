var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var LolcatStore = assign({}, EventEmitter.prototype, {
  set: function(src) {
      this.lolcat = src;
      this.emitChange();
  },

  get: function() {
      return this.lolcat;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {

  case Constants.ADD_LOLCAT:
      console.log(action);
      LolcatStore.set(action.src);
      break;

  default:
  }
});

module.exports = LolcatStore;
