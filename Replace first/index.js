function replaceFirst(values) {
    // your code here
    if(values.length <= 1) return values;
    let first = values.shift();
    return [...values, first]
}

console.log("Example:");
console.log(JSON.stringify(replaceFirst([1, 2, 3, 4])));