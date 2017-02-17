(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var AppViewModel = require('./models/appVM.js');

ko.applyBindings(new AppViewModel());
},{"./models/appVM.js":4}],2:[function(require,module,exports){
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
},{"../ctrl/mathCtrl.js":2,"../utils/utils.js":7,"./enums.js":5,"./logModel.js":6}],5:[function(require,module,exports){
'use strict';

module.exports = {
	appName: "CALCULATOR",
	logName: 'OPERATION LOG'
};
},{}],6:[function(require,module,exports){
'use strict';

module.exports = function(expression, result) {
	var str = expression + ' = ' + result + ';'
	this.logText = ko.observable(str);
};
},{}],7:[function(require,module,exports){
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
},{}]},{},[1]);
