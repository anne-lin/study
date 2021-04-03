function fib(n){
    // if(n<2){
    //     return 1;
    // }
    // return fib(n-1)+fib(n-2);
    if(n<2){
        return 1;
    }
    let index=0,cur=1,pre=1,tem;
    while(index < n){
        tem=pre;
        pre=cur;
        cur=tem+cur;
        index++;
    }
    return pre+cur;
}
console.log(fib(50))