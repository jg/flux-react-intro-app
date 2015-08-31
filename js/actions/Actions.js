var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {
  addLolcat: function(lolcatSource) {
    AppDispatcher.dispatch({
        actionType: Constants.ADD_LOLCAT,
        src: lolcatSource
    });
  },

};

module.exports = Actions;
