function remove (string) {
  
    if(string[0] == '!') return string.slice(1)
    return string.replace(/\W+ | !$/g, ' ')
}