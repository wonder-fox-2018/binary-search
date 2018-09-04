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

function binarySearch (search, array) {
  ownSort(array)
  var awal = 0
  var akhir = array.length-1
  var mid = Math.floor(awal+akhir/2)

  while(awal <= akhir){
    mid = Math.floor(awal+akhir/2)
    if(array[mid] === search){
      return array[mid]+' true'
    } else if (array[mid] < search){
      awal = mid+=1
    } else {
      akhir = mid-=1
    }
  }

  return -1+' false'

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
// console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
