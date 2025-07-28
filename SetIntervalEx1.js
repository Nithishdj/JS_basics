let count=0;
const intervalId=setInterval(()=>
{
    count++;
    console.log("count:"+count);
    if(count==5){
        clearInterval(intervalId);
        console.log("interval stopped");
    }
},1000);