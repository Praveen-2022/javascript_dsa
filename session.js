// function findPow(){
//     let n =9;
//     let y;
//  while(n>1){

//  if (n%2 ===0){
//     n=n/2;
//  }else{
//     return false
//  }
// }
// if(n===1) {
//     return true
// }

// //      y=Math.pow(2,i)
// //     if(y===n ){
// //         console.log(true);
// //         break;
// //     }
// // }
// //     if(y!==n){
// //         console.log(false);
//     }
// console.log(findPow());



function findInt(str){
let num =15;
 
// let roman = 'I','V','X', 'L', 'C', 'D', 'M';
let sum = 0
let roman ={
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

for(let i=0;i<str.length;i++){
    sum+=roman[str[i]]; 
}
console.log(sum);
}

findInt("IX");

    s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
    s = s.replace("CD", "CCCC").replace("CM", "DCCCC"); 





















