function test(nums){

    let count =0;
    let output =0;
    for(let i =0;i<=nums.length;i++){
        if(count === nums[i]){
            output = count;
            count++;
        }
        return output
    }
}
let nums =[1,1,1,1,1];

console.log(test(nums));