function nextInLine(arr, item) {
  // Only change code below this line
  let firstArrElem;

    if(arr.length <= 0){
      arr.push(item);
      firstArrElem = arr[0];
    } else {  
      firstArrElem = arr[0];
      arr.shift(0);
      arr.push(item);
    }

  return firstArrElem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Arr length is : " + testArr.length + " elements");
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));