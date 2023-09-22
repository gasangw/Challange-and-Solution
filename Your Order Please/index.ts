export function order(words:string):string{
    let finalResults: string[] = []
    words.split(' ').map((word)=> {
      word.split('').map(ele => {
        if(Number(ele)){
          finalResults[Number(ele)] = word
        }
      })
    })
    return finalResults.join(' ').trim()
}