//1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    
    let hash = {};
    
    //Create a hash table and prepare the data
    // key: number, value: index
    nums.forEach((num, index) => {
        hash[num] = index
    });
    
    
    //iterate over the given arrary 
    for (let i = 0; i < nums.length; i++) {
        
        //make a sustraction of the target - the current number in array
        let remainer = target - nums[i];
        
        //Check is the remainer is a key of the hash
        if(hash[remainer] && hash[remainer] != i){
            //If so, means that the  current number + the remainer = target
            //Return current index, the remainer index
            return [i, hash[remainer]];
        }
    }
 
};



//13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
    //Create a hash of the roman numbers
    const hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    let romanInt = 0;
    let previousNumber = '';
    
    const romanArray = [...s];
    
    
    if(romanArray.lenght == 1){
        return hash[romanArray[0]];
    }
    
    
    romanArray.forEach((num, index) =>{
        
        //If the iteration is starting, just add the number
        if(index == 0){
            romanInt+= hash[num];
        }else{
            //Evaluate it the previous number is less than the current number
            //e.g. IV 
            if(hash[previousNumber] < hash[num]){
                //Add new value
                romanInt += hash[num];
                //Substract the remainder value * 2
                romanInt -= hash[previousNumber] * 2 ;
            }else{
                //Add the next number
                romanInt+= hash[num];
            }
        }
        
        //Keep reference to the previous number
        previousNumber = num;
    });
    
    return romanInt;
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




//136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    if(nums.length == 1){
        return nums[0]
    }
    
    //Hash to store the count
    let hash = {}
    
    for(let i = 0; i < nums.length; i++){
    
        //Check is the value is in the hash
        if(!hash[nums[i]]){
            //if not, add de number with the counter in 1
            hash[nums[i]] = 1
        }else{
            //If so, increase the counter by 1
            let counter = hash[nums[i]]
            hash[nums[i]] = counter + 1
        }
    }

    //Iterate over the hash to check which key has 1 as value    
    for (const [key, value] of Object.entries(hash)){
        if(value == 1){
            return key
        }
    }
    
    
};
