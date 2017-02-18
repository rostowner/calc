'use strict';

var operations = require('./operations.js');

module.exports = {
	doCalculation: function(params) {
		var a = params.a;
		var b = params.b;

		return operations[params.operation](a, b);
	},
	
};