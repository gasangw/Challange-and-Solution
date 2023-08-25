function sumDigPow(a, b) {
    let finalArr = [];
    
    for(let i = a; i <= b; i++){
      let myValue = i;
      let sepa = myValue.toString().split('').map((ele, index) => ((ele**(index+1))))
      if(sepa.length === 1){
         let newNum = Number(sepa.join(''))
          if(newNum === myValue) finalArr.push(newNum)
      }
      
      if(sepa.length > 1){
        let sum = sepa.reduce((acc, curr) => acc += curr , 0)
        if(sum === myValue) finalArr.push(sum)
      }
    }
    
    return finalArr;
  }