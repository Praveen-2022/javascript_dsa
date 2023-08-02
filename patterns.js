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

function hollowPyramid(){
    let n=4;
    let m=5;
    for(let i=1;i<=4;i++){
        let pattern ="";
        for(let j=1;j<=5;j++){
            if(i === 1 || j === 1 || i === n || j === m){
                pattern += "* ";
            }else{
                pattern +="  " //dual space
            }
        }
        console.log(pattern);
    }
}

hollowPyramid();

















