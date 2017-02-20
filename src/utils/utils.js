'use strict';

function getParams(str) {
	var arr = str.split(' ');
	var a = +arr[0];
	var b = (arr[2] === '')? false: +arr[2];
	var operation = arr[1];

	validateParams(a, b, operation);

	return {
		a: a,
		b: b,
		operation: 	operation
	};
}

function validateParams(a, b, operation) {
	if (!$.isNumeric(a) || 
		!$.isNumeric(b) ||
		!operation.match(/[\-/*+]/) ||
		!operation.length ||
		operation.length > 1 ) {

		throw new Error('Wrong Parans');
	}
}

module.exports = {
	getParams: getParams
};