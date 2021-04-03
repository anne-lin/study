//let和var的区别

//var变量提升
console.log(a);//undefined
var a=10;
console.log(a);//10
console.log(b) //报异常
let b=20;

//let定义块级作用域
{
    let i = 9;
}
console.log(i);//报异常

//块级作用域实现原理（for）
{
    let m_i=0; //=>for(let m_i=0)
    
    {
        let i = m_i
        setTimeout(()=>{
            console.log(i);
        },1000);
        m_i++
    }
    {
        let i = m_i
        setTimeout(()=>{
            console.log(i);
        },1000);
        m_i++
    }
    {
        let i = m_i
        setTimeout(()=>{
            console.log(i);
        },1000);
        m_i++
    }
    }
    
    for(let n=0;n<3;n++){
        setTimeout(()=>{
            console.log(n);
        },1000);
    }
    console.log(n);
    