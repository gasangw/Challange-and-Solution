
function maxMultiple(divisor, bound){
    //your code here
    
    // declear an array that holds the occuring number
    // loop through from zero to less or equal to bound,
    // if i is divisible by divisor push to an array.
    // sort the array and return the largest number
    
    let arr = [];
    for(let i = 0; i <= bound; i++){
      if(i % divisor == 0){
        arr.push(i)
      }
    }
    return Number(arr.sort((a,b)=> a-b).slice(-1).join(''))
  }