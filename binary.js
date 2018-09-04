'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i]
      for (let j = 0; j < arr.length; j++) {
        if(temp<=arr[j]){
          temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp
        }
      } 
    }
  return arr
}

function binarySearch (search, arr) {
  let left = 0 
  let right = arr.length-1
  while (left <= right) {
    let midIndex = left + Math.floor((right-left)/2)
 
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

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
