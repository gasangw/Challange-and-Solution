function backwardStringByWord(text: string): string {
    // your code here
    if(text.length < 1) return text;
    
    return text.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log("Example:");
console.log(backwardStringByWord("welcome to a game"));