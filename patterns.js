// *****
// *****
// *****
// *****

function simplePattern() {
  let n = 4;
  let m = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= m; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}
// simplePattern();

// Half Pyramind Patterns
// *
// **
// ***
// ****
// *****

function halfPyramid(nums = 5) {
  for (let i = 1; i <= nums; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// halfPyramid();

// * * * * *
// *       *
// *       *
// * * * * *

function hollowPyramid() {
  let n = 4;
  let m = 5;
  for (let i = 1; i <= 4; i++) {
    let pattern = "";
    for (let j = 1; j <= 5; j++) {
      if (i === 1 || j === 1 || i === n || j === m) {
        pattern += "* ";
      } else {
        pattern += "  "; //dual space
      }
    }
    console.log(pattern);
  }
}

// hollowPyramid();

// Inverted Half Pyramid
// * * * * *
// * * * *
// * * *
// * *
// *

function inverted(n = 5) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i + 1; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// inverted();

// Half Pyramid Rotated  180 Degree

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
function rotated(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// rotated(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function astrikChangeToNumber() {
  let n = 5;
  let number = 1;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    console.log(pattern);
  }
}

// astrikChangeToNumber();
