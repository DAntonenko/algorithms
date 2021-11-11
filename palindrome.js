'use strict';

function isPalindrome(str) {
  const simplifiedStr = str.toLowerCase().replace(/\W/gs, '');
  const arr = simplifiedStr.split('');
  const reversedArr = arr.reverse();
  const reversedStr = reversedArr.join('');

  return simplifiedStr === reversedStr;
}

const str = 'Madam, I’m Adam';

console.log(isPalindrome(str));