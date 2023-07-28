var maxSequence = function(arr){
    // ...
    if(arr.length == 0) return 0;
    let currentSum = arr[0];
    let globalSum = arr[0];
    
    for(let i = 1; i < arr.length; i++){
      currentSum = Math.max(arr[i], currentSum + arr[i])
      if(currentSum > globalSum){
        globalSum = currentSum
      }
    } 
    if(globalSum < 0) {
      return 0
    } else {
      return globalSum;
    }
}

// use kadanes algorithm