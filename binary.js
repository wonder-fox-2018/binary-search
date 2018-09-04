'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var temp;
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j-1]) {
        temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }  
  }
  return arr
}

function binary_search (search, array) {
  var kecil = 0;
  var besar = array.length - 1;

  console.log('Search',search,'from',array);

  var limit = false;

  while(limit === false) {
    var mean = Math.floor((besar - kecil)/2);

    if (mean === 0 || mean === array.length - 1 ||kecil > mean) limit = true
    if (search === array[mean]) return mean
    else if (search > array[mean]) kecil = mean;
    else if (search < array[mean]) besar = mean;  
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


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
