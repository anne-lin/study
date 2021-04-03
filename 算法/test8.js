var romanToInt = function(s) {
    let dictionary={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
        "IV":4,
        "IX":9,
        "XL":40,
        "XC":90,
        "CD":400,
        "CM":900,
    },
    length=s.length,sum=0;
    if(length == 1){
        return dictionary.s;
    }
    for(let i=0;i<length;i++){
        if(["I","X","C"].includes(s[i]) && dictionary[s[i]] < dictionary[s[1+i]]){
            sum+=dictionary[s.slice(i,2+i)];
            i++;
        }else{
            sum+=dictionary[s[i]]
        }
    }
    return sum;
};
console.log(romanToInt("MCMXCIV"))
