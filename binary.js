'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var temp;

    for(var i = 0; i < arr.length; i++){
      var min = i;
      for(var j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[min]){
          min = j
        }
      }
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;  
    }
  return arr
}

function binary_search (search, array) {
  var batasBawah= 0;
  var batasAtas= array.length-1;
  
  while (batasBawah<=batasAtas) {
    var tengah= Math.floor((batasBawah+batasAtas)/2);
    if (search < array[tengah]) {
      var batasAtas= tengah-1
    } else if (search > array[tengah]) {
      var batasBawah= tengah+1
    } else {
      return tengah;
    }
  }
return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}



