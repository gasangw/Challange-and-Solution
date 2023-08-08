function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
  }



// SOLUTION
function greet(name){
    return name === 'Johnny' ? "Hello, my love!" : `Hello, ${name}!`
  }