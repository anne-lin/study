

function addFactory(){
    let sum=0;
    function add(){
        let val=Array.prototype.slice.call(arguments) || [];
        if(val.length){
            val.forEach((item)=>{
                sum+=item;
            })
        }
        return add;
    }
    add.valueOf=function(){
        return sum;
    }
    return add;
}
var  add = addFactory();

add(1)(2);
// 3
console.log(add.valueOf()); 
add(3);
//6
console.log(add.valueOf());