'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  // INSERTION SORT
  let unsorted,j;

  for (let i = 1; i <= arr.length; i++) {
    unsorted = arr[i]
    j = i-1

    while (j>=0 && unsorted < arr[j]) {
      arr[j+1] = arr[j]
      j -= 1
      arr[j+1] = unsorted
    }
  }
  return arr
}

function binary_search (search, arr) {
  // Your searching code
  let left = 0, right = arr.length-1, midIndex=0

  while (left <= right) {
    
     midIndex = left + Math.floor((right-left)/2)
 
    if (arr[midIndex] === search) {
      return midIndex
    } else if (arr[midIndex] < search) {
        left = midIndex + 1
    } else {
        right = midIndex - 1
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted);

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
