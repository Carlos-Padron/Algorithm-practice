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
