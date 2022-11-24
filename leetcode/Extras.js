//69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let squareRoot = 0
    let oddNumber = 1
    
    while (x > 0){
        x = x - oddNumber
        oddNumber = oddNumber + 2

        squareRoot++
    }

    
    return x < 0 ? squareRoot - 1 : squareRoot
    
};
