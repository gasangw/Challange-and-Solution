// JavaScript Solution

function twoArePositive(a, b, c) {
    // Happy Coding
    //   if(a > 0 && b > 0 && c <= 0 || a > 0 && c > 0  && b <= 0 || b > 0 && c > 0 && a <= 0 || c > 0 && a > 0 && b<= 0){
    //   return true;
    // } else {
    //   return false;
    // }

    // IMPROVED ANSWER
    return [a,b,c].filter(num => num > 0).length == 2
  }

// TypeScript Solution

// export function twoArePositive(a: number, b: number, c: number): boolean {
//     if(a > 0 && b > 0 && c <= 0 || a > 0 && c > 0  && b <= 0 || b > 0 && c > 0 && a <= 0 || c > 0 && a > 0 && b<= 0){
//     return true;
//   } else {
//     return false;
//   }
// }