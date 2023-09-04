function twoHighest(arr) {
    let sortedArr =  arr.sort((a,b)=> b - a)
    
    let uniqueItem = [...new Set(sortedArr)]
    return uniqueItem.length <= 1 ? uniqueItem : uniqueItem.slice(0,2) 
}

// CODE REFACTORED

function twoHighest(arr) {
   return [...new Set(arr)].sort((a,b) => b -a ).slice(0,2)
  }