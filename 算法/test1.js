
var arr=[["A","B"],["a","b"],[1,2],[3,4]];

function fun(arr){
    if(arr.length == 1){
        return arr[0];
    }
    let arr1=arr.shift(), arr2=arr[0],res=[];
    arr1.forEach(element => {
        arr2.forEach(item=>{
            res.push(element+item);
        })
    });
    arr[0]=res;
    return fun(arr);
}
function fun2(arr){
    while(arr.length > 1){
        let arr1=arr.shift(), arr2=arr[0],res=[];
        arr1.forEach(element => {
            arr2.forEach(item=>{
                res.push(element+item);
            })
        });
        arr[0]=res;
    }
    return arr[0]
}
// [
//     'Aa1', 'Aa2',
//     'Ab1', 'Ab2',
//     'Ba1', 'Ba2',
//     'Bb1', 'Bb2'
//   ]
console.log(fun2(arr));