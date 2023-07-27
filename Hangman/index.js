function hangman(hangmanString) {

    // First Solution 


//     let str = hangmanString.split('')
//    let newStr = '';
//    for(let i = 0; i < str.length; i++){
//      if(i%2 == 0){
//        newStr+='_'
//      } else {
//        newStr+=str[i]
//      }
//    }
//    return `${newStr}`


// Second and Improved solution

return hangmanString.split('').map((ele, index)=> index%2 == 0? '_': ele).join('');
 }