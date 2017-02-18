'use strict';

module.exports = function() {
	var enums = require('./enums.js');
	var mathCtrl = require('../ctrl/mathCtrl.js');
	var utils = require('../utils/utils.js');
	var logModel = require('./logModel.js');

	this.log = ko.observableArray([]);
	this.currentVal = ko.observable('');
	this.nums = ko.observable(enums.nums);
	this.operations = ko.observable(enums.operations);
	this.appName = ko.observable(enums.appName);
	this.logName = ko.observable(enums.logName);
	this.errorMessage = ko.observable('');
	this.isErrorMessage = ko.observable(false);

	this.addSymbol = function(symbol) {
		var str = this.currentVal();
		this.currentVal(str + symbol);
	};

	this.calculate = function() {
		try {
			var expression = this.currentVal();
			var params = utils.getParams(expression);
			var result = mathCtrl.doCalculation(params);

			this.log.push(new logModel(expression, result));
			this.currentVal(result);

		} catch (error) {
			this.reset();
			this.isErrorMessage(true);
			this.errorMessage(error);
			console.error(error);
		}
	};

	this.reset = function() {
		this.currentVal('');
		this.isErrorMessage(false);
		this.errorMessage('');
	};


	this.showLogItem = function() {
		console.log(this);
	};

};