'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var data=arr
    for(var i=0;i<data.length-1;i++){
        var currentData=data[i]
        var maks=data[i+1]
        var indexMaks=i+1
        for(var j=i+1;j<data.length;j++){
            if(data[j]<maks){
                maks=data[j]
                indexMaks=j
            }
        }
        if(maks<currentData){
            data[i]=maks
            data[indexMaks]=currentData
        }
    }
    return data
}
//mencari median
function binarySearch (search, array) {
  var newArray=array.slice(0)
  // Your searching code
  while(newArray.length !== 0){
    if(newArray.length%2===1){
      var median=Math.floor(newArray.length/2)
      if(newArray[median]===search){
        return true
      }
      else if(search>newArray[median]){
        newArray.splice(0,median+1)
      }
      else{
        newArray.splice(median,newArray.length)
      }
    }
    else{
      var median=newArray.length/2
      if(newArray[median]===search){
        return true
      }
      else if(search>newArray[median]){
        newArray.splice(0,median+1)
      }
      else{
        newArray.splice(median,newArray.length)
      }
    }
  }
  
  return 0;
}
function binarySearchRelease1 (search, array) {
  var arraySort=ownSort(array)
  var newArray=arraySort.slice(0)
  // Your searching code
  var index=[]
  for(var i=0;i<array.length;i++){
    index.push(i)
  }
  while(newArray.length !== 0){
    if(newArray.length%2===1){
      var median=Math.floor(newArray.length/2)
      if(newArray[median]===search){
        return index[median]
      }
      else if(search>newArray[median]){
        //initial
        newArray.splice(0,median+1);
        index.splice(0,median+1);
      }
      else{
        newArray.splice(median,newArray.length)
        index.splice(median,newArray.length)
      }
    }
    else{
      var median=newArray.length/2
      if(newArray[median]===search){
        return index[median]
      }
      else if(search>newArray[median]){
        newArray.splice(0,median+1)
        index.splice(0,median+1)
      }
      else{
        newArray.splice(median,newArray.length)
        index.splice(median,newArray.length)
      }
    }
  }
  
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
//[40, 18, 22, 32, 90, 10, 10, 22, 8]
var arrayGanjilSorted = ownSort(testArrayGanjil)
//[3, 31, 89, 53, 53, 85, 77, 21, 55]
// Driver code
console.log(binarySearchRelease1(32, [13,19,24,32,29,37,43]))

console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))
console.log(binarySearch(53, arrayGanjilSorted))


module.exports = {
  binarySearch
}
