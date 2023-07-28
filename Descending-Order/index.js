function descendingOrder(n){
    let num = n.toString().split('')
    return num.length <= 1? Number(num.join('')) : Number(num.sort((a,b) => Number(b) - Number(a)).join('')) 

    // wonderful solution

    // return parseInt(String(n).split('').sort().reverse().join(''))
  }