/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let resMap=new Map(),i=0;
    while(i<nums.length){
        if(resMap.has(nums[i])){
            resMap.set(nums[i],false);
        }else{
            resMap.set(nums[i],true);
        }
        i++;
    }
    console.log(Array.from(resMap.entries()));
    return Array.from(resMap.entries()).filter(item=>item[1])[0][0];
};
console.log(singleNumber([4,1,2,1,2]));