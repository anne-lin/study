
var convert = function(s, numRows) {
    let arr=[],rows=-1,position;
    for(let i=0;i<numRows;i++){
        arr.push([]);
    }
    for(let i=0;i<s.length;i++){
        position=i%(2*numRows-2);
         if(position == 0){
            ++rows;
        }
        if(position < numRows){
            arr[position][rows]=s[i];
        }else{
            ++rows;
            arr.forEach(item=>item[rows]="");
            arr[2*numRows-position-2][rows]=s[i];
        }
       
    }
    console.log(arr);
    return arr.reduce((pre,item)=>{
        let str=item.join("");
        return pre+str
    },"")
};

console.log(convert("LEETCODEISHIRING",4) == "LDREOEIIECIHNTSG")