// JavaScript Solution

function twoArePositive(a, b, c) {
    // Happy Coding
      if(a > 0 && b > 0 && c <= 0 || a > 0 && c > 0  && b <= 0 || b > 0 && c > 0 && a <= 0 || c > 0 && a > 0 && b<= 0){
      return true;
    } else {
      return false;
    }
  }

// TypeScript Solution
