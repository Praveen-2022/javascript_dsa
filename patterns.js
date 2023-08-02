// Half Pyramind Patterns
// *
// **
// ***
// ****
// *****

function halfPyramid(nums =5){
    for(let i=1;i<=nums;i++){
        let pattern="";
        for(let j=1;j<=i;j++){
            pattern +="* "
        }
        console.log(pattern)
    }
}

halfPyramid();
