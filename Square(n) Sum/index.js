// function squareSum(numbers){
//     let sum = 0;
//    for(let i = 0; i < numbers.length; i++){
//     let squareNum = numbers[i]*numbers[i]
    
//     sum+= squareNum;
//    }
//     return sum
//   }

//   Improved solution

function squareNum(numbers){
    return numbers.reduce((sum, num)=> (num*num) + sum, 0)
}