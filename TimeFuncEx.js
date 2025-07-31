let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");
let CTimeout = document.querySelector("#CTimeout");
let Time = document.querySelector("#Time");

let CTimeoutID = setTimeout(()=>{
    msg1.style.color = "yellow";
    msg2.style.color = "orange";
},3000);

CTimeout.addEventListener("click",()=>{
    clearTimeout(CTimeoutID);
});

let count = 1;
let SIntervalID = setInterval(()=>{
    Time.innerHTML= count;
    if(count==3){
        clearInterval(SIntervalID);
    }
    count++;
},1000);