// ButterFly Pattern

function butterFly() {
  let n = 5;

  //for upper Half
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*" + " ";
    }

    //for spaces
    let spaces = 2 * (n - i);
    for (let j = 1; j <= spaces; j++) {
      pattern += "  ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += "*" + " ";
    }
    console.log(pattern);
  }

  // for lower half

  for (let i = n; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*" + " ";
    }

    //for spaces
    let spaces = 2 * (n - i);
    for (let j = 1; j <= spaces; j++) {
      pattern += "  ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += "*" + " ";
    }
    console.log(pattern);
  }
}

// butterFly();

