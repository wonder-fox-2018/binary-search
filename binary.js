'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i=0; i<arr.length; i++) {
    for (var j=i+1; j >= 0; j--) {
      if (arr[j+1] < arr[j]) {
        var tampung = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tampung; 
      }
    }
  }
  return arr
}

console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));


function binary_search (search, array) {  
  var indexAwal = 0; // 0
  var indexAkhir = array.length-1; // 6
  var range = indexAkhir - indexAwal;
  var indexTengah = Math.floor((range) / 2); // 3


  while (indexTengah <= indexAkhir && indexTengah >= indexAwal) {
    if (array[indexTengah] === search) { 
      return indexTengah;
    }
    else if (search < array[indexTengah]) {
      indexAkhir = indexTengah - 1;
      indexTengah = Math.floor((indexAkhir - indexAwal) / 2) + indexAwal;
    }
    else if (search > array[indexTengah]) {
      indexAwal = indexTengah + 1;
      indexTengah = Math.floor((indexAkhir - indexAwal) / 2) + indexAwal;
    }
  }
  // IF NOT FOUND:
  return -1;
}





// TEST CASE:
let test_array1 = [1,2,3,4,5]
console.log(binary_search(4, test_array1) === 3); // true

let test_array2 = [13,19,24,29,32,37,43]
console.log(binary_search(35, test_array2) === -1); // true (testcase: 35)

let test_array3 = [100,120,130,135,150,170]
console.log(binary_search(135, test_array3) === 3); // true (testcase: 135)

let test_array4 = [100,120,130,135,150,170]
console.log(binary_search(150, test_array4) === 4); // true (testcase: 135)

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


