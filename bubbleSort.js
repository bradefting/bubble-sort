"use strict";

function bubbleSort(arr){

  if(arr.length <= 1 || !Array.isArray(arr)){
    return "array doesnt need to be sorted"
  }

  let madeChanges;

  for(let i = 0; i < arr.length-1; i++){
    madeChanges = false;

    for(let k = 0; k < arr.length-1; k++){
      if(arr[k] > arr[k+1]){
        madeChanges = true;
        [arr[k], arr[k+1]] = [arr[k+1], arr[k]];
      }
    }
    if(!madeChanges){
      return arr;
    }
  }
  return arr;
}

// bubbleSort([1,5,9,0]);
// bubbleSort([-1,-5,9,0]);
bubbleSort([11,54,-9,0]);
// bubbleSort([1,5,9,0]);
