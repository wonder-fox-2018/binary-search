'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8, 23];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(data) { //Insertion Sort
  for (var i = 1; i < data.length; i++) {
		for (var j = i-1; j >= 0; j--) {
			var inferior;
			var index_inferior;
			var superior;
			var index_superior;

			if (data[j+1] < data[j]) {
				inferior = data[j+1];
				superior = data[j];
				index_superior = j;
				index_inferior = j+1;
			}

			data[index_superior] = inferior;
			data[index_inferior] = superior;
		}
	}

	return data;
}

function binary_search (search, array) {
	var index_median_ganjil = Math.floor(array.length/2);
	var index_median_genap = array.length/2;

	var nilai_median;
	var index_real_median;

	var min = 0;
	var max = array.length - 1;

	if (array.length % 2 === 1) {
		nilai_median = array[index_median_ganjil];
		index_real_median = index_median_ganjil;
	} else if (array.length % 2 === 0) {
		nilai_median = array[index_median_genap];
		index_real_median = index_median_genap;
	}

	if (search === nilai_median) {
		return index_real_median;
	} else {
		if (search < nilai_median) {
			max = index_real_median - 1;
		} else if (search > nilai_median) {
			min = index_real_median + 1;
		}

		while (min !== max) {
			var newArray_length = 0;

			for (var i = min; i < max; i++) {
				newArray_length++;
			}

			if (newArray_length % 2 === 1) {
				var index_median = Math.floor((min + max)/2);
			} else if (newArray_length % 2 === 0) {
				var index_median = (min + max)/2;
			}

			var nilai_median = array[index_median];

			if (search < nilai_median) {
				max = index_median - 1;
			} else if (search > nilai_median) {
				min = min + 1;
			} else if (search === nilai_median) {
				return index_median;
			}
		}

		if (search !== array[min]) {
			return -1;
		} else {
			return min;
		}
	}
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binary_search(8, arrayGenapSorted)); // 0
console.log(binary_search(10, arrayGenapSorted)); // 2
console.log(binary_search(33, arrayGenapSorted)); // -1

console.log(binary_search(53, arrayGanjilSorted)); // 4
console.log(binary_search(3, arrayGanjilSorted)); // 0
console.log(binary_search(2, arrayGanjilSorted)); // -1

module.exports = {
  binary_search
}