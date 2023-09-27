function mergeArrays(arr1, arr2) {
    if(arr1.length == 0 && arr2.length == 0) return [];
   
    return [...new Set(arr1.sort((a,b) => a - b).concat(arr2.sort((a,b) => a - b)))].sort((a,b)=> a -b)
 }