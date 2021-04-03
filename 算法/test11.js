/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1){
        return "1";
    }
    let newStr="",preStr,index=1,
        str=countAndSay(n-1);//21
        preStr=str[0];
    for(let i=1;i<str.length;i++){
        if(preStr == str[i]){
            index++;
        }else{
            newStr+=index+preStr;
            preStr=str[i];
            index=1;
        }
    }
    return newStr+=index+preStr;
};
console.log(countAndSay(4));