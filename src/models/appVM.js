'use strict';

module.exports = function() {
	var enums = require('./enums.js');
	var mathCtrl = require('../ctrl/mathCtrl.js');
	var utils = require('../utils/utils.js');
	var logModel = require('./logModel.js');

	var emptyString = '';
	var emptyList = [];

	this.log = ko.observableArray([
		new logModel('2 + 2', 4)
		]);
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
			var expression = this.currentVal();
			var params = utils.getParams(expression)
			var result = mathCtrl.doCalculation(params);

			this.log().push(new logModel(expression, result));
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