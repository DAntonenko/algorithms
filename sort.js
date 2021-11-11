'use strict';

function enumeration(arr) {
  function findIndexOfSmallest(arr) {
    let smallest = arr[0];
    let indexOfSmallest = 0;

    for (let i = 0; i < arr.length; i++ ) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        indexOfSmallest = i;
      }
    }
    return indexOfSmallest;
  }

  let sortedArr = [];

  while (arr.length) {
    let currentMinNum = arr.splice(findIndexOfSmallest(arr), 1)[0];
    sortedArr.push(currentMinNum);
  }

  return sortedArr;
}

function quickSort(arr) {
  if (arr.length < 2) return arr;
  const min = 1;
  const max = arr.length;
  const rand = Math.floor(min + Math.random() * (max - min));
  const pivot = arr[rand];
  const lesser = [];
  const greater = [];
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
}

const arr = [5, 0, 1, 64, 0, 435, -5]

console.log(arr)
// console.log(enumeration(arr));
console.log(quickSort(arr));
