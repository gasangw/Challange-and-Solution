export function solve(s: string): number {
    let onlyNums = s.replace(/[a-z]/gi, ' ')
    let arrNums:number [] =[]
       onlyNums.split(' ').map(word => {
          if(Number(word)){
            arrNums.push(Number(word))
          }
       })
    
    return Math.max(...arrNums)
  }