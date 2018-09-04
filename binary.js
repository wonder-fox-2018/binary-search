'use strict'
/*
  PSEUDOCODE :
  SET "testArrayGenap" with value [40,18,22,32,90,10,10,8]
  SET "testArrayGanjil" with value [3, 31, 89, 53, 53, 85, 77, 21, 55]

  FUNCTION ownSort("arr"){
    SET "data" with value "arr"
    LOOP through each number in "data" start from "i"=0
      STORE "indexBefore" with value "i"-1
      STORE "dataBefore" with value "data[indexBefore]"
      IF "data[i]" less then "dataBefore" THEN
        STORE "data[indexBefore]" with value "data[i]"
        STORE "data[i]" with value "dataBefore"
        WHILE "indexBefore" not equals 0 THEN
          STORE "dataMundur" with value "data[indexBefore]"
          IF "data[indexBefore]" less then "data[indexBefore-1]" THEN
            STORE "data[indexBefore]" with value "data[indexBefore-1]"
            STORE "data[indexBefore-1]" with value "dataMundur"
          End IF
          DECREMENT "indexBefore" by minus 1
        END WHILE
      END IF
    End Loop
    
    RETURN "data"
  }

FUNCTION binarySearch ("search", "array") {
  SET newArray=array.slice(0)
  // Your searching code
  WHILE "newArray's length" not equals  0)
    IF length of "newArray" modulus 2 equals 1 THEN
      STORE "median" with length of "newArray" divided 2 and floored
      IF "newArray[median]" equals "search" THEN
        RETURN true
      ELSE IF "search" greater then "newArray[median]" THEN
        DELETE "newArray" value from 0 how many "median+1"
      ELSE
        DELETE "newArray" value from "median" until length of "newArray"
      END IF
    
    ELSE
      STORE "median" with value length of "newArray" divided 2
      IF "newArray[median]" equals "search" THEN
        RETURN true
      ELSE IF "search" greater then "newArray[median]" THEN
        DELETE "newArray" value from 0 how many "median+1"
      ELSE
        DELETE "newArray" value from "median" until length of "newArray"
      END IF
    END IF
  END WHILE
  
  RETURN -1;
}

FUNCTION binarySearchRelease1 ("search","array"){
  SET "arraySort" with value CALL "ownSort" with parameter "array"
  SET "newArray" with value COPY value "arraySort"

  SET "index" with value []
  LOOP trough each number in "array" start from "i"=0
    STORE "i" in "index"
  END LOOP

  WHILE "newArray's length" not equals  0)
    IF length of "newArray" modulus 2 equals 1 THEN
      STORE "median" with length of "newArray" divided 2 and floored
      IF "newArray[median]" equals "search" THEN
        RETURN "index[median]"
      ELSE IF "search" greater then "newArray[median]" THEN
        DELETE "newArray" value from 0 how many "median+1"
        DELETE "index" value from 0 how many "median+1"
      ELSE
        DELETE "newArray" value from "median" until length of "newArray"
        DELETE "index" value from "median" length of "newArray"
      END IF
    
    ELSE
      STORE "median" with value length of "newArray" divided 2
      IF "newArray[median]" equals "search" THEN
        RETURN "index[median]"
      ELSE IF "search" greater then "newArray[median]" THEN
        DELETE "newArray" value from 0 how many "median+1"
        DELETE "index" value from 0 how many "median+1"
      ELSE
        DELETE "newArray" value from "median" until length of "newArray"
        DELETE "index" value from "median" length of "newArray"
      END IF
    END IF
  END WHILE
  
  RETURN -1;

}
*/
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var data=arr
  for(var i=1;i<data.length;i++){
    var indexBefore=i-1
    var dataBefore=data[indexBefore]
    if(data[i]<dataBefore){
      data[indexBefore]=data[i]
      data[i]=dataBefore
      while(indexBefore !== 0){
        var dataMundur=data[indexBefore]
        if(data[indexBefore]<data[indexBefore-1]){
          data[indexBefore]=data[indexBefore-1]
          data[indexBefore-1]=dataMundur
        }
        indexBefore -=1
      }
    }
  }
  return data
}

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
  
  return -1;
}
/*mengembalikan indeks*/
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
