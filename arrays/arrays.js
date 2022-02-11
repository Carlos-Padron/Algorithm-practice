//  1.1 is Unique
//Implement an algorithm to determine if a string has all unique characters.
function isUnique(str) {
  let duplicates = {};

  let strArray = Array.from(str);

  for (let index = 0; index < strArray.length; index++) {
    if (!duplicates[strArray[index]]) {
      duplicates[strArray[index]] = strArray[index];
    } else {
      return false;
    }
  }

  return true;
}

//console.log(isUnique("abcde"));
//console.log(isUnique("aac"));
//console.log(isUnique("yuisjoi"));

//  1.2 check Permutation
//Give two strings, wite a method to decide if one is a permutation of the other
function checkPermutation(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let hashStr1 = {};

  let count = 0;

  Array.from(str1).forEach((char) => {
    hashStr1[char] = char;
  });

  Array.from(str2).forEach((char) => {
    if (hashStr1[char] == char && hashStr1[char] != -1) {
      count++;
      hashStr1[char] = -1;
    }
  });

  return count == str1.length;
}

//console.log(checkPermutation("1234", "12345"))
//console.log(checkPermutation("1234", "1234"))
//console.log(checkPermutation("3412", "3412"))
//console.log(checkPermutation("3412", "aaaa"))

//  1.3 URLify
// Replace all spaces with %20
function URLify(str) {
  let strArray = Array.from(str.trim());
  for (let index = 0; index < strArray.length; index++) {
    if (strArray[index] == " ") {
      strArray[index] = "%20";
    }
  }
  return strArray.join("");
}

//console.log(URLify("MR John Smith    "))

//  1.4  Palindome Permutation
function isAPalindronmePermutation(str) {
  let cleanString = str.split(" ").join("");

  let j = cleanString.length - 1;
  let isPalindrome = true;
  for (let i = 0; i < cleanString.length; i++) {
    if (cleanString[i] != cleanString[j]) {
      isPalindrome = false;
    }
    j--;
  }

  return isPalindrome;
}

//console.log(isAPalindronmePermutation("tacocat"));

//  1.5 One Way

function oneWay(string) {}

//  1.6  String Compression

function stringCompression(str) {
  let strArray = Array.from(str);

  if (strArray.length === 0) {
    return "";
  }

  let newStr = "";
  let previousChar = strArray[0];
  let counter = 0;

  newStr += previousChar;
  for (let i = 0; i < strArray.length; i++) {
    //console.log(strArray[i]);
    if (previousChar != strArray[i]) {
      newStr += counter.toString() + strArray[i];
      counter = 1;
      previousChar = strArray[i];
      continue;
    }

    if (previousChar === strArray[i]) {
      counter++;
    }

    if (i + 1 === strArray.length) {
      newStr += counter.toString();
    }
  }

  return newStr.length < str.length ? newStr : str;
}

//console.log(stringCompression("aabcccccaaa"));

//Leet code
function twoSum(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] && hash[target - nums[i]] != i) {
      return [hash[target - nums[i]], i];
    }
  }

  return [];
}

var checkString = function (s) {
  let previousChar = "";
  for (let i = 0; i < s.length; i++) {
    console.log(previousChar);

    if (previousChar == "b" && s[i] == "a") {
      return false;
    }

    previousChar = s[i];
  }
  return true;
};

var maxProfit = function (prices) {
  let maxValue = 0;
  let buyPointer = 0;
  let sellPointer = 1;

  while (sellPointer < prices.length) {
    if (prices[buyPointer] < prices[sellPointer]) {
      let max = prices[sellPointer] - prices[buyPointer];
      maxValue = maxValue < max ? max : maxValue;
    } else {
      buyPointer = sellPointer;
    }
    sellPointer++;
  }
  return maxValue;
};




/** 1305. All Elements in Two Binary Search Trees
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    
    let queue1 = [root1]
    let queue2 = [root2]
    let arr = []
    
    while(queue1.length != 0){
        
        let node = queue1.shift()
        
        if(node.val != undefined || node.val != null){
            arr.push(node.val)        
        }
        
        if(node.left){
            queue1.push(node.left)
        }
        
         if(node.right){
            queue1.push(node.right)
        }
                
    }
    
    
     while(queue2.length != 0){
        
        let node = queue2.shift()
        
        if(node.val != undefined || node.val != null){
            arr.push(node.val)        
        }
        
        if(node.left){
            queue2.push(node.left)
        }
        
         if(node.right){
            queue2.push(node.right)
        }
                
    }
    
    
    //console.log(arr.sort())
    
    return arr.sort()
    
    
};
