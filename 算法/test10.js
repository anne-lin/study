var minPatches = function(nums, n) {
    let numsMap=new Set();
    for(let i =0;i<nums.length;i++){
        numsMap.set(nums[i]);
        for(let j=i+1;j<nums.length;j++){
            numsMap.set(nums[j]+nums[i]);
        }
    }
    let sumNums;
    for(;n>0;n--){
        sumNums=nums.reduce(item=>{
            return nums;
        });
        if(n - sumNums > 0) nums.push(n-sumNums);
    }

};
function getNumsArr(arr){

}