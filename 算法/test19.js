var rotate = function(nums, k) {
    for(let i=0,j=nums.length-1;i<nums.length-k;j--){
        let m=nums[i];//1,2
        nums[i]=nums[j];//num[0]=7,num[1]=6
        nums[j]=nums[j-k];//num[6]=4,num[5]=3
        nums[j-k]=m;//num[3]=1,num[2]=2
        i++;
    }
    //7,6,2,1,5,3,4
    console.log(nums);
};
k=3
[1,2,3,4,5,6,7]
[1,2,7,3,5,6,4]


[1,2,3,4,5,6,7]
[1,2,3,4,5,6,7]
[1,2,3,4,5,6,7]
[1,2,3,4,5,6,7]
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
console.log(rotate([1,2,1,2,3,4],3))