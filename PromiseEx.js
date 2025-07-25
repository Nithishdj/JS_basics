function getNumber(){
    //Promise is a base object for async work
    return new Promise
    (resolve=>setTimeout(()=>resolve(num),500));
}

getNumber(2)//returns a promise that 
//resolve with 2 after 500ms
.then(n=>getNumber(n*3))//resolve after another 500ms
.then(n2=>console.log("Result",n2))//results 6
.catch(err=>console.error(err));
//handles error any possible rejection
//o/p appears after 1 sec
function getNumber(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(num);
        },500);
    });
}
getNumber(2)
.then(function(n)
{return getNumber(n*3)
})
.then(function(n2){
    console.log("Result",n2);
})
.catch(function(err){
    console.log(err)
});

