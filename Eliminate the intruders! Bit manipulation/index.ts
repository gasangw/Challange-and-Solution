function eliminateUnsetBits(number: string): number {
    // your code here
    let myArr = number.split('').filter(ele => Number(ele) > 0)
    if(myArr.length < 1) return 0;
    
    let binaryStr = myArr.join('')
    
    return parseInt(binaryStr, 2)
  }