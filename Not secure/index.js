function alphanumeric(string){
    //your code here
    if(string.length === 0) return false;
    let newStr = string.replace(/[^a-zA-Z0-9]/g, '')
    return newStr === string
  
}

// BEST SOLUTION
//let alphanumeric = s => /^[a-z\d]+$/i.test(s);