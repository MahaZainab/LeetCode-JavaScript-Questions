/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count=n;
    return function() {
        // Post fix
        return count++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */