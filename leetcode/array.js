
//14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    //Use the first word to evaluate the rest
    let fisrtWord = strs[0]
    let pre = ""
    
    //If the array only contains one word
    let oneWord = true;
    
    //Iterate over the fisrtWord
    for (let i = 0; i < fisrtWord.length; i++ ){
        
        //check if all i letter of words matches the i letter of the fisrtWord 
        let equal = strs.every( word => {
            return word[i] == fisrtWord[i]
        });
    
        if(!equal){
            //If not, split the first world by the last matching letter
            pre = fisrtWord.substring(0,i)
            oneWord = false
            break
        }
        
    }
        
return oneWord ? fisrtWord : pre 
    
}; 


//66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let count = 0
    let arrLen = digits.length - 1
    
    for(let i = arrLen ; i >= 0 ;i-- ){
        
        if(arrLen == i){
            if(digits[i] < 9){
                digits[i] = digits[i] + 1
            }else{
                digits[i] = 0
                count++
            }
        }else{
            if(count != 0){
                if(digits[i] < 9){
                    digits[i] = digits[i] + count
                    count = 0
                }else{
                    digits[i] = 0
                }
            }
        }
    }

    if(count != 0){
        digits.unshift(count)
    }
    
    return digits
    
};
