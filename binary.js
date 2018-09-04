'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8, 23];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(data) {
  for (var i = 0; i < data.length-1; i++) {
		var temp = data[i];
		var min = data[i];
		var index_min;

		for (var j = i+1; j < data.length; j++) {
			if (data[j] < min) {
				min = data[j];
				index_min = j;
			}
		}

		if (min < temp) {
			data[i] = min;
			data[index_min] = temp;
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

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

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