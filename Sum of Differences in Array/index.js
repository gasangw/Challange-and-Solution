// SOLUTION 1

// function sumOfDifferences(arr) {
//     if(arr.length <= 1) return 0;
     
//      let sortedArr = arr.sort((a,b)=> b - a)
//      let sum = [];
//      for(let i = 0; i < sortedArr.length; i++){
//        sum.push(sortedArr[i] - sortedArr[i+1])
//      }
//      return sum.filter(Boolean).reduce((acc, curr)=> acc += curr, 0)
// }

// SOLUTION TWO 
function sumOfDifferences(arr) {
return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}
// Solution three

// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);