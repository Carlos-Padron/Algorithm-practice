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

function oneWay(string) { }

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

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let nOperations = 0;

  for (let i = 0; i < logs.length; i++) {
    let op = logs[i];

    if (op == "../" && nOperations > 0) {
      nOperations--;
    }

    if (op != "./" && op != "../") {
      nOperations++;
    }
  }

  return nOperations;
};

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  let fDate = new Date(date1);
  let sDate = new Date(date2);
  // hours*minutes*seconds*milliseconds
  return Math.abs((sDate - fDate) / (24 * 60 * 60 * 1000));
};

var romanToInt = function (s) {
  let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let number = 0;
  let prevLetter = "";

  if (s.length == 1) return hash[s];

  Array.from(s).forEach((elem, index) => {
    if (index == 0) {
      number += hash[elem];
    } else {
      number += hash[elem];

      if (hash[prevLetter] < hash[elem]) {
        number -= hash[prevLetter] * 2;
      }
    }

    prevLetter = elem;
  });

  return number;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const vals = [
    { val: 1000, rom: "M" },
    { val: 900, rom: "CM" },
    { val: 500, rom: "D" },
    { val: 400, rom: "CD" },
    { val: 100, rom: "C" },
    { val: 90, rom: "XC" },
    { val: 50, rom: "L" },
    { val: 40, rom: "XL" },
    { val: 10, rom: "X" },
    { val: 9, rom: "IX" },
    { val: 5, rom: "V" },
    { val: 4, rom: "IV" },
    { val: 1, rom: "I" },
  ];

  let currentNum = num;
  let romanNumeral = "";
  let i = 0;

  while (currentNum > 0) {
    const { val, rom } = vals[i];

    while (currentNum >= val) {
      romanNumeral += rom;
      currentNum -= val;
    }

    i++;
  }

  return romanNumeral;
}


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
var getAllElements = function (root1, root2) {

  let queue1 = [root1]
  let queue2 = [root2]
  let arr = []

  while (queue1.length != 0) {

    let node = queue1.shift()

    if (node.val != undefined || node.val != null) {
      arr.push(node.val)
    }

    if (node.left) {
      queue1.push(node.left)
    }

    if (node.right) {
      queue1.push(node.right)
    }

  }


  while (queue2.length != 0) {

    let node = queue2.shift()

    if (node.val != undefined || node.val != null) {
      arr.push(node.val)
    }

    if (node.left) {
      queue2.push(node.left)
    }

    if (node.right) {
      queue2.push(node.right)
    }

  }


  //console.log(arr.sort())

  return arr.sort()


};


/**
 * 2. Add Two Numbers
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let remain = 0

  let list = null
  let listHead = null

  while ((l1 || l2 || remain != 0)) {

    if (l1 && l2) {

      if (listHead == null) {

        let sum = parseInt(l1.val) + parseInt(l2.val) + parseInt(remain)

        if (sum == 100) {
          remain = sum.toString().substring(0, sum.toString().length - 1)
          sum = sum.toString().substring(2, sum.toString().length)
        } else if (sum >= 10) {
          remain = sum.toString().substring(0, 1)
          sum = sum.toString().substring(1, sum.toString().length)

        } else {
          remain = 0
        }

        list = new ListNode(sum)
        listHead = list
        l1 = l1.next
        l2 = l2.next


      } else {

        let sum = parseInt(l1.val) + parseInt(l2.val) + parseInt(remain)



        if (sum == 100) {
          remain = sum.toString().substring(0, sum.toString().length - 1)
          sum = sum.toString().substring(2, sum.toString().length)
        } else if (sum >= 10) {
          remain = sum.toString().substring(0, 1)
          sum = sum.toString().substring(1, sum.toString().length)
        } else {
          remain = 0
        }


        list.next = new ListNode(sum)
        list = list.next

        l1 = l1.next
        l2 = l2.next
      }

    } else if (l1 && !l2) {
      //l1 has nodes bit l2 doesnt
      if (listHead == null) {

        let sum = parseInt(l1.val) + parseInt(remain)

        if (sum == 100) {
          remain = sum.toString().substring(0, sum.toString().length - 1)
          sum = sum.toString().substring(2, sum.toString().length)
        } else if (sum >= 10) {
          remain = sum.toString().substring(0, 1)
          sum = sum.toString().substring(1, sum.toString().length)
        } else {
          remain = 0
        }


        list = new ListNode(sum)
        listHead = list
        l1 = l1.next

      } else {

        let sum = parseInt(l1.val) + parseInt(remain)

        if (sum == 100) {
          remain = sum.toString().substring(0, sum.toString().length - 1)
          sum = sum.toString().substring(2, sum.toString().length)
        } else if (sum >= 10) {
          remain = sum.toString().substring(0, 1)
          sum = sum.toString().substring(1, sum.toString().length)
        } else {
          remain = 0
        }


        list.next = new ListNode(sum)
        list = list.next

        l1 = l1.next
      }
    }
    else if (!l1 && l2) {

      //l2 has nodes but l1 doesnt 
      if (listHead == null) {

        let sum = parseInt(l2.val) + parseInt(remain)

        if (sum == 100) {
          remain = sum.toString().substring(0, sum.toString().length - 1)
          sum = sum.toString().substring(2, sum.toString().length)
        } else if (sum >= 10) {
          remain = sum.toString().substring(0, 1)
          sum = sum.toString().substring(1, sum.toString().length)
        } else {
          remain = 0
        }


        list = new ListNode(sum)
        listHead = list
        l2 = l2.next

      } else {


        let sum = parseInt(l2.val) + parseInt(remain)


        if (sum == 100) {
          remain = sum.toString().substring(0, sum.toString().length - 1)
          sum = sum.toString().substring(2, sum.toString().length)
        } else if (sum >= 10) {
          remain = sum.toString().substring(0, 1)
          sum = sum.toString().substring(1, sum.toString().length)

        } else {
          remain = 0
        }




        list.next = new ListNode(parseInt(sum))
        list = list.next

        l2 = l2.next
      }
    }
    else {
      list.next = new ListNode(remain)
      remain = 0

    }

  }

  return listHead
};

