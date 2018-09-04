// 'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr
}

// console.log(ownSort([40, 18, 22, 32, 90, 10, 10, 22, 8]))

function binary_search (search, array) {
  if(!array.includes(search)) {
		return -1;
  }
  let max = array.length-1;
	let min = 0;

	while(min <= max) {
		let mid = Math.floor((max+min)/2);
		if(array[mid] < search) {
			min = min + 1;
		} else if(array[mid] > search) {
			max = mid - 1;
		} else {
			return mid;
		}
	}
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
