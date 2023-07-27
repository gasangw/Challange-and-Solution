function hangman(hangmanString) {
    let str = hangmanString.split('')
   let newStr = '';
   for(let i = 0; i < str.length; i++){
     if(i%2 == 0){
       newStr+='_'
     } else {
       newStr+=str[i]
     }
   }
   return `${newStr}`
 }