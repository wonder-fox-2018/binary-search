'use strict'


//TODO: WRITE PSEUDOCODE
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  return insertionSort(arr);
}

//IMPLEMENT INSERTION SORT
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var key = i;
    for (let indexToSwap = key - 1; indexToSwap >= 0; indexToSwap--) {
      debugger;
      if (arr[key] < arr[indexToSwap]) {
        var temp = arr[key];
        arr[key] = arr[indexToSwap];
        arr[indexToSwap] = temp;
        key = indexToSwap;
      }
      debugger;
    }
  }
  return arr;
}


//IMPLEMENT BINARY SEARCH

function binary_search(search, array) {
  var startIndex = 0;
  var endIndex = array.length -1;
  var midIndex = Math.floor((endIndex - startIndex)/2);
  var notFound = true;
  
  while (notFound) {
    notFound = startIndex <= endIndex;
    debugger;
    if (search === array[midIndex]) {
      return midIndex;
    }


    if (search > array[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
    
    midIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    debugger;
    //console.log(midIndex, startIndex, endIndex);
    
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGanjilSorted);
console.log(arrayGenapSorted);

// Driver code
//console.log(binary_search(0, [0,1,2,3,4,5,6,7]))
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
