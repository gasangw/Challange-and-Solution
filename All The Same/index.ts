function allTheSame(elements: any[]): boolean {
    return new Set(elements).size > 1 ? false : true;
  }
  
  console.log("Example:");
  console.log(allTheSame([1, 1, 1]));
  
  // These "asserts" are used for self-checking
//   assert.strictEqual(allTheSame([1, 1, 1]), true);
//   assert.strictEqual(allTheSame([1, 2, 1]), false);
//   assert.strictEqual(allTheSame([1, "a", 1]), false);
//   assert.strictEqual(allTheSame([1, 1, 1, 2]), false);
//   assert.strictEqual(allTheSame([]), true);
//   assert.strictEqual(allTheSame([1]), true);
  
  console.log("Coding complete? Click 'Check Solution' to earn rewards!");