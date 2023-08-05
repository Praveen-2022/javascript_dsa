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

// Rhombus Pattern

function rombus() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= 5; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// rombus();

//number Pyramid

//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5

function pyramidNum() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    //for spaces

    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }
    // for number

    for (let j = 1; j <= i; j++) {
      pattern += i + " ";
    }
    console.log(pattern);
  }
}
// pyramidNum();

// Palindromic Number pattern
//         1
//       2 1 2
//     3 2 1 2 3
//   4 3 2 1 2 3 4
// 5 4 3 2 1 2 3 4 5

function PalindromicNum() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    // for spaces
    for (let j = 1; j <= n - i; j++) {
      pattern +="  "
    }
 //for first half number

// tricky part  
 for(let j=i;j>=1;j--){
  pattern += j + " ";
 }

 // for another half 
  for (let j = 2; j <= i; j++) {
    pattern += j + " ";
  }
 

    console.log(pattern);
  }
}

PalindromicNum();
