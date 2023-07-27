// used Binary search to solve the challenge
function keepOrder(ary, val) {
    //your code here
   let start = 0;
    let end = ary.length - 1;
    
    while(start <= end){
      const mid = Math.floor(( start + end) /2)
      
      if(ary[mid] < val) {
        start = mid + 1;
      } else{
        end = mid - 1
      }
    }
   return start;
}