export function arrayDiff(a: number[], b: number[]): number[] {
    return a.filter(ele => !b.includes(ele))
  
}