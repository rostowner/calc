'use strict';

function Log(expression, result) {
	var str = expression + ' = ' + result + ';';
	this.logText = ko.observable(str);
	this.tra = str;
}

module.exports = Log;