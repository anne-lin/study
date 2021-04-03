/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let res=[],num=1,length=s.length;
    for(let i=0;i<length;i++){
        if(i == length-1 || s[i] != s[1+i]){
            if(num>=3){
                res.push([i-num+1,i])
            }
            num=1;
        }else{
            num++;
        }
    }
    return res;
};
console.log(largeGroupPositions("abbxxxxzzy"));