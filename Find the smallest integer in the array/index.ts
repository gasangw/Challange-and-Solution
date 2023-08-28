// Method 1

// export function findSmallestInt(args: number[]): number {
//     return Math.min(...args)
// }

// METHOD TWO

export function findSmallestInt(args: number[]): number {
    return args.sort((a,b) => a - b)[0]
}