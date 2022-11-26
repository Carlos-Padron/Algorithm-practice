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


//326. Power of Three
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    let remainer = n
    
    while (remainer > 3){
        
        remainer =  remainer / 3
        
    }
    
    return remainer == 3 || remainer == 1 ? true: false
    
};
