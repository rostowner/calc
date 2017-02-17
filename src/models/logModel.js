'use strict';

module.exports = function(expression, result) {
	var str = expression + ' = ' + result + ';'
	this.logText = ko.observable(str);
};