// Bubble Sort

function bubbleSort(arr){
for(let i=0;i<arr.length-1;i++){
    let swap =false;
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            swap=true;
        }
        if(swap=false){
            break;
        }
    }
}return arr;
}

// let arr =[1,2,3,4,5];

// console.log(bubbleSort(arr));

// Selection Sort
function selectioSort(arr){
    for (let i=0;i<arr.length-1;i++){
        let minPos =i
        for(let j=i+1;j<=arr.length;j++){

            if(arr[minPos] > arr[j]){
                minPos = j;
            }
        }
        let temp = arr[minPos];
        arr[minPos] =arr[i];
        arr[i]=temp; 
    }
    return arr
} 

// let arr =[3,4,5,9,8,2,1,7,6]

// console.log(selectioSort(arr));

// Insertion Sort
function InsertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr =arr[i];
        let prev =i-1;
        while(prev >=0 && arr[prev]>curr){
            arr[prev+1]=arr[prev]
            prev--;
        }
        arr[prev+1] =curr;
    }
    return arr
}

let arr =[9,6,4,5,3,2,8,1,7]

console.log(InsertionSort(arr));