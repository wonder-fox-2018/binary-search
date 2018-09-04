'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++){  //insertion
    for (let j = 0; j < i; j++){
      if (arr[i] < arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }    
  }
  return arr
}
// [ 8, 10, 10, 18, (22), 22, 32, 40, 90 ]
function binary_search (search, array) {
  // Your searching code
  let awal = 0
  let akhir = array.length-1
  while(awal <= akhir){
    let mid = Math.floor((akhir - awal)/2) + awal
    if (search === array[mid]){
      return mid
    } else if (array[mid] > search) { //kiri
      akhir = mid-1
    } else if (array[mid] < search){ // kanan
      awal = mid+1
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

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
