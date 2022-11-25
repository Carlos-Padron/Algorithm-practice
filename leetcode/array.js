
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



//121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {


    let buy = 0
    let sell = 1;
    let max = 0
    
    
    for(let i = 0; sell < prices.length; i++){
        
        if(prices[buy] < prices[sell]){
            // Buy cheap, sell expensive
            let tempProfit = prices[sell] - prices[buy] 
            max = max < tempProfit? tempProfit : max;
        }else{
            buy = sell
        }
        sell++
    }
    
    return max

};



//387. First Unique Character in a String
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    //Hash to count the letters
    let hash = {}
    
    for(let i = 0; i < s.length; i++ ){

        //If it is not in the hash. 
        if(!hash[s[i]]){
            hash[s[i]] = 1
        }else{
            //If so, increase the counter
            let counter = hash[s[i]]
            hash[s[i]] = counter + 1
        }
    }

    
    //Iterate over the string
    for(let i = 0; i < s.length; i++){
        
        //Check if the current letter exist in hash
        // and has a value of 1 to return its index
        if(hash[s[i]] == 1){
            return i
        }
        
    }
    
    
    return -1;
};



//217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    //hash to store the counter of each letter
    let hash = {}
    
    for(let i = 0; i < nums.length; i++){
        
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        }else{
            return true
        }
    }
    
    return false
    
};




//242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length != t.length){
        return false
    }
    
    //Store counter of each letter
    let hash1 = {}
    let hash2 = {}
    let verifiedHash = {}
    
    //Count every letter of the first word
    Array.from(s).forEach((letter, index) =>{
        if(!hash1[letter]){
            hash1[letter] = 1
        }else{
            let counter = hash1[letter]
            hash1[letter] = counter + 1
        }
    })
    
    
    for(let i = 0; i < t.length; i++){
        let letter = t[i]
        
        if(!hash2[letter]){
            hash2[letter] = 1
            
            //Validate if the letter is in the hash1
            if(!hash1[letter]){
                //If not, return false
                return false;
            }else if( hash2[letter] == hash1[letter] ){
                //Check if the counter in every hash has the same value
                verifiedHash[letter] = true;
            }else{
                verifiedHash[letter] = false;
            }
            
            
        }else{
            let counter = hash2[letter]
            hash2[letter] = counter + 1
            
            //Check if the counter in every hash has the same value
            if( hash2[letter] == hash1[letter] ){
                verifiedHash[letter] = true;
            }else{
                verifiedHash[letter] = false;
            }
            
        }
        
    }
    
    return Object.values(verifiedHash).every(value => value == true)
    
};



//125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let lowerCasedWord = s.toLowerCase()
    let cleanWord = lowerCasedWord.replace(/[^0-9a-z]/g, '');
    
    ///////
    let cleanWordArray = cleanWord.split('')
    let reversedWord = cleanWordArray.reverse().join('')
    
    return cleanWord == reversedWord
    
    /////// or ///////  
    
     let j = cleanWord.length - 1;
     let isPalindrome = true;
     for (let i = 0; i < cleanWord.length; i++) {
       if (cleanWord[i] != cleanWord[j]) {
          isPalindrome = false;
        }
        j--;
     }

    return isPalindrome;
};

