function fun(price,arr){
    arr.sort((a,b)=>{
        return b - a;
    });
    let result;
    arr.forEach((item,index)=>{
        let res=[],residualPrice=price;

        while(arr[index] <= residualPrice || index < arr.length){
            if(arr[index] <= residualPrice){
                res.push(arr[index]);
                residualPrice=residualPrice-arr[index];
            }else{
                index ++;
            }
        }
        
        if(residualPrice == 0){
            result = (result && result.length < res.length ) ? result:res;
        }
    });
    
    return result ? result.length:"Impossible";
}

let result = fun(process.argv[2], process.argv.slice(3))
//console.log(process.argv)
console.log(result)