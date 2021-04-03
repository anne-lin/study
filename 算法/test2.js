function fun(time){
    if(time == 1){
        return 2
    }
    return fun(--time)*2;
}

console.log(fun(10));