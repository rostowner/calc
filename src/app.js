'use strict';

var AppViewModel = require('./models/appVM.js');

ko.applyBindings(new AppViewModel());



ko.bindingHandlers.debug = {
    init: function(element, valueAccessor) {
        console.log( 'Knockoutbinding:' );
        console.log( element );
        console.log( ko.toJS(valueAccessor()) );
    }
};