'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS INT32ARRAY //

/**
* FUNCTION: isInt32Array( value )
*	Validates if a value is an Int32Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is an Int32Array
*/
function isInt32Array( value ) {
	return isStr.call( value ) === '[object Int32Array]';
} // end FUNCTION isInt32Array()


// EXPORTS //

module.exports = isInt32Array;
