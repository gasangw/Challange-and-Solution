function reverseMessage(str) {
    let arr = str.split(' ').reverse()
     return arr.map((word) => {
       let newStr = word.split('').reverse().join('')
       let reversedStr = newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase()
       return reversedStr;
    }).join(' ')
}