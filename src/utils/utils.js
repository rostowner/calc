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