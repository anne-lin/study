
var letterCombinations = function(digits) {
    let arr=["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"].map(item=>item.split("")),
    resArr=arr[parseInt(digits[0])-2];
    for(let i=1;i<digits.length;i++){
        let newRes=[];
        resArr.forEach(item=>{
            arr[parseInt(digits[i])-2].forEach(items=>{
                newRes.push(item+items);
            })
        });
        resArr=newRes;
    }
    return resArr;
};
console.log(letterCombinations("23"))