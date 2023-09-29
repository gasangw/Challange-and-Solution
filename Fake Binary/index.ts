export const fakeBin = (x:string):string => {
    return  x.replace(/[01234]/g, '0').replace(/[56789]/g, '1')  
};

// BEST SOLUTION
// return x.replace(/\d/g, n=> Number(n) < 5 ? '0': '1')