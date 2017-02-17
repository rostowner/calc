'use strict';

module.exports = function() {
	var enums = require('./enums.js');
	var mathCtrl = require('../ctrl/mathCtrl.js');
	var utils = require('../utils/utils.js');

	var emptyString = '';

	this.currentVal = ko.observable(emptyString);
	this.nums = ko.observable(enums.nums);
	this.operations = ko.observable(enums.operations);
	this.appName = ko.observable(enums.appName);
	this.logName = ko.observable(enums.logName);

	this.addSymbol = function(symbol) {
		var str = this.currentVal();
		this.currentVal(str + symbol);
	};

	this.calculate = function() {
		try {
			var params = utils.getParams(this.currentVal())
			var result = mathCtrl.doCalculation(params);

			// log calculations
			this.currentVal(result);
		} catch (error) {
			this.reset();
			console.error(error);
		}
	};

	this.reset = function() {
		this.currentVal(emptyString);
	};
};