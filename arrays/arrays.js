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
  let strArray = Array.from(str);
  for (let index = 0; index < strArray.length; index++) {
    if (strArray[index] == " ") {
      strArray[index] = "%20";
    }
  }
  return strArray.join("");
}

//console.log(URLify("MR John Smith    "))


//  1.4  Palindome Permutation


//  1.5 One Way



