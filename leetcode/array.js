
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
