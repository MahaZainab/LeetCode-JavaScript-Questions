/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    // Check if classFunction is a function (constructor)
    if (typeof classFunction !== 'function') {
        return false;
    }

    // Check for primitive types and their respective constructors
    if (classFunction === Number) {
        return typeof obj === 'number';
    }
    if (classFunction === String) {
        return typeof obj === 'string';
    }
    if (classFunction === Boolean) {
        return typeof obj === 'boolean';
    }
    if (classFunction === BigInt) {
        return typeof obj === 'bigint';
    }
    if (classFunction === Symbol) {
        return typeof obj === 'symbol';
    }

    // Check if obj is a primitive but the classFunction is Object
    if (classFunction === Object) {
        return obj !== null && (typeof obj === 'object' || typeof obj === 'function' || typeof obj === 'number' || typeof obj === 'string' || typeof obj === 'boolean' || typeof obj === 'bigint' || typeof obj === 'symbol');
    }

    // Use the instanceof operator to check if obj is an instance of classFunction
    return obj instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */