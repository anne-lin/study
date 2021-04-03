var summaryRanges = function(nums) {
    let start=0,gap,res=[];
    while(start < nums.length){
        let curVal=nums[start];
        gap=1;
        while(gap+start < nums.length && curVal+gap == nums[gap+start]){
            gap++;
        }
        gap == 1 ? res.push(`${curVal}`):res.push(`${nums[start]}->${nums[start+gap-1]}`);
        start+=gap;
    }
    return res;
};

nums = [0,1,2,4,5,7];
console.log(summaryRanges(nums));