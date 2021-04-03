let arr=[2,[3,4,[5,7]]];
console.log(arr.join().split(","));

const flatArr=(arr)=>{
    let resArr=[];
    let node=new Node(arr,0);
    resArr.push(node);

    while(resArr.length>0){
        n = resArr[resArr.length - 1];
        a = n.arr;
        i = n.num;
        for( ; i < a.length; i++) {
            if(a[i] in arr) {
                node=new Node(a[i],0);
                resArr.push(node);
                n.num = ++i;
                break;
            } else {
                print()
            }
        }
        if(i == a.length) {
            resArr.pop();
        }
    }
}
function Node(arr,num){
    this.arr=arr;
    this.num=num;
}