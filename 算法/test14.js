var convert = function(s, numRows) {
    let resStr="",row=1,gap=numRows+1,gapArr=[gap,gap];
    for(let i=0;i<numRows;i++){
        let gapArr,
        isGapArrOne=true,
         index=i;
         if((gap-2*i) == 0){
            gapArr=[gap,gap]
        }else{
            gapArr=[gap-2*i,2*i]
        }
        while(index < s.length){
            resStr+=s[index];
            index+=isGapArrOne ? gapArr[1]:gapArr[0];
            isGapArrOne=!isGapArrOne;
        }
    }
    return resStr;
}
console.log(convert("LEETCODEISHIRING",4) == "LDREOEIIECIHNTSG")