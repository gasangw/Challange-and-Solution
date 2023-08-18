export function tailSwap(arr: [string,string]): [string,string] {
    // your code here
    let twoArr = arr.map((ele) => (ele.split(':')))
    let firstArr = twoArr[0]
    let secondArr = twoArr[1]
     let fLast = firstArr.pop();
     let sLast = secondArr.pop();
    
     let NewFirstArr = [...firstArr, sLast]
     let NewSecondArr = [...secondArr, fLast]
      
    return [NewFirstArr.join(':')+'', NewSecondArr.join(':')+'']
  }