'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
    // Your sorting code
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function binary_search(search, array) {
    // Your searching code

    var i_kanan = array.length;
    var i_kiri = 0;
    var i = Math.floor((i_kanan - i_kiri) / 2);
    for (; i_kanan - i_kiri >= 0;) {

        if (array[i] == search) {
            return true;
        } else if (search < array[i]) {
            i_kanan = i - 1;
            i = Math.floor((i_kanan - i_kiri) / 2);

        } else if (search > array[i]) {
            i_kiri = i + 1;
            i = i_kiri + Math.floor((i_kanan - i_kiri) / 2);
        }
    }
    return false;
}

function binary_search2(search, array) {
    // Your searching code

    var i_kanan = array.length;
    var i_kiri = 0;
    var i = Math.floor((i_kanan - i_kiri) / 2);
    var index = i;
    for (; i_kanan - i_kiri >= 0;) {

        if (array[i] == search) {
            return index;
        } else if (search < array[i]) {
            i_kanan = i - 1;
            i = Math.floor((i_kanan - i_kiri) / 2);
            if (i_kanan - i_kiri <= 0)
                index = i_kanan;
            else
                index = i;

        } else if (search > array[i]) {
            i_kiri = i + 1;
            i = i_kiri + Math.floor((i_kanan - i_kiri) / 2);
            if (i_kanan - i_kiri <= 0)
                index = i_kanan;
            else
                index = i;
        }
    }
    return -1;
}

    



var arrayGenapSorted = ownSort(testArrayGenap)
console.log(arrayGenapSorted);
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted);
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

console.log("\n");
console.log(binary_search2(8, arrayGenapSorted))
console.log(binary_search2(10, arrayGenapSorted))
console.log(binary_search2(33, arrayGenapSorted))

console.log(binary_search2(53, arrayGanjilSorted))
console.log(binary_search2(3, arrayGanjilSorted))
console.log(binary_search2(2, arrayGanjilSorted))


module.exports = {
    binary_search
}