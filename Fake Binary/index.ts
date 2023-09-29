export const fakeBin = (x:string):string => {
    return  x.replace(/[01234]/g, '0').replace(/[56789]/g, '1')  
};