// Question
// You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

// Remember

// You can solve this question in multiple ways.

// Think about the following -

// 1.What would be the brute force way of solving this question ? What would be the Time and Space complexity of this approach?

// 2.Is there a better way to solve this with a more optimum Time complexity than the Brute force way ?

// 1 Method

function sortedSquarredArray(array) {
  const newArray = new Array(array.length).fill(0);

  let pointerLeft = 0;

  let pointerRight = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);

    const rightSquared = Math.pow(array[pointerRight], 2);

    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;

      pointerLeft++;
    } else {
      newArray[i] = rightSquared;

      pointerRight--;
    }
  }

  return newArray;
}


// 2nd Method

function sortedArr(array){
    const newArr= new Array(array.length).fill(0);
    for(let i =0 ; i<array.length;i++){
        newArr [i]= array[i]*array[i];
    }
    newArr.sort(function(a,b) {return a-b});
    return newArr;
}

let a=[-2,-3,5,6,7,4];
let b =[1,2,3,4,5,6];
let c =[];

console.log(sortedArr(a));
console.log(sortedArr(b));
console.log(sortedArr(c));


// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

const checkMonotonic = function (array) {
  const first = array[0];
  const last = array[array.length - 1];
  // 1.......10
  if (first === last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] !== array[i]) return false;
    }
  } else if (first < last) {
    // non decreasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) return false;
    }
  } else {
    // non increasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] > array[i]) return false;
    }
  }
  return true;
};

checkMonotonic([9]);