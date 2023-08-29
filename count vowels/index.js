function getCount(str) {
    let count = 0;
    let regexs = /[aeiou]/
    for(let char of str){
      if(regexs.test(char)){
        count += 1
      }
    }
    return count
  }