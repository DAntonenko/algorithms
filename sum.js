'use strict';

function sumWithoutReduce(arr) {
  if (arr.length === 0) {
    return 0;
  }

  else if (arr.length === 1) {
    return arr[0];
  }

  else {
    return arr.shift() + sumWithoutReduce(arr);
  }
}

const arr = [4, 6, 3];

console.log(sumWithoutReduce(arr));