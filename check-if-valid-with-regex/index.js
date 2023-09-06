function validateCode (code) {
    return /^[1|2|3]/g.test(code)
}

// OR

function validateCode (code) {
    return /^[123]/g.test(code)
  }

  // OR

  function validateCode (code) {
    return /^[1-3]/g.test(code)
  }