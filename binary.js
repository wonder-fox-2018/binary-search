'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 1; i <= arr.length-1; i++){
    for(let j = 0 ; j <= i-1; j++){
      if(arr[i] < arr[j]){
        let sort = arr[i]
        arr[i] = arr[j]
        arr[j] = sort 
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let mid = 0 
  let left = 0
  let rigth = array.length -1

  while(left <= rigth){
    mid = Math.floor((left+rigth)/2)
    if(search > array[mid]){
      left = mid + 1
    }
    else if(search < array[mid]){
      rigth = mid -1
    }
    else{
      return mid
    }
  }
  
  return -1
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
