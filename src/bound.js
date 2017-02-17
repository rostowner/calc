(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var AppViewModel = require('./viewModels/appVM.js');

ko.applyBindings(new AppViewModel());
},{"./viewModels/appVM.js":5}],2:[function(require,module,exports){
'use strict';

var operations = require('./operations.js');

module.exports = {
	doCalculation: function(params) {
		var a = +params.a;
		var b = +params.b;

		return operations[params.operation](a, b);
	},
	
};
},{"./operations.js":3}],3:[function(require,module,exports){
'use strict';

module.exports = {
	'*': function(a, b) {
		return a * b;
	},
	'/': function(a, b) {
		return a / b;
	},
	'+': function(a, b) {
		return a + b;
	},
	'-': function(a, b) {
		return a - b;
	}
};
},{}],4:[function(require,module,exports){
'use strict';

module.exports = {
	getParams: function(str) {
		var arr = str.split(' ');
		return {
			a: 			arr[0],
			b: 			arr[2],
			operation: 	arr[1]
		};
	}
};
},{}],5:[function(require,module,exports){
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
},{"../ctrl/mathCtrl.js":2,"../utils/utils.js":4,"./enums.js":6}],6:[function(require,module,exports){
'use strict';

module.exports = {
	appName: "CALCULATOR",
	logName: 'OPERATION LOG'
};
},{}]},{},[1]);
