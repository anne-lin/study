var readLine = require("readline");
var rl = readLine.createInterface({
    input:process.stdin,
    ouput:process.stdout
});
let inArr=[];
rl.on("line",line=>{
    if(!line) return;
    inArr.push(line.trim());
    if(inArr[inArr.length-1]==0){
        let m=inArr[0].split(" ")[0],
            n=inArr[0].split(" ")[1],
            arr=[];
        for(let i=1;i<inArr.length-1;i++){
            arr[i-1]=[];
            arr[i-1].push(...inArr[i].split(" "));
        }
        
    }
})
