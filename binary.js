'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length-1; i++) {
    var temp = arr[i]
    var index_min = arr[i];
    var min = arr[i]
    for (var j = i+1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        index_min = j
      }
    }
    if (min < temp) {
      arr[i] = min
     // min = nums[index_min]
      arr[index_min] = temp
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var bagi =  Math.floor(array.length/2)
  for (var i = 0; i < array.length; i++) {
    console.log(array[i] +" "+ array[bagi])
  }
  // console.log(array[bagi])
  // console.log(array)
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))
//
 // console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
