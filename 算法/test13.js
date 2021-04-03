var convert = function(s, numRows) {
    let arr=new Array(numRows).fill(""),row;
    for(let i=0;i<s.length;i++){
        row=i%(2*numRows-2);
        if(row < numRows){
            arr[row]+=s[i];
        }else{
            arr[2*numRows-row-2]+=s[i];
        }
    }
    return arr.reduce((pre,item)=>{
        return pre+item
    },"")
}
console.log(convert("LEETCODEISHIRING",4) == "LDREOEIIECIHNTSG")