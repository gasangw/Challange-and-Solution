export const high = (str: string): string => {
    let words = str.split(' ')
    
    const myScore =(word: string)=> {
      return word.split('').reduce((prev, curr)=> prev + (curr.charCodeAt(0) -96), 0)
    }
    
    let listOfWords = words.map(w => myScore(w))
    console.log(listOfWords)
    
    let highestIndex = 0;
    let highScore = 0;
    listOfWords.forEach((score, i)=> {
      if(score > highScore){
        highScore = score;
        highestIndex = i
      }
    })
    return words[highestIndex]
}