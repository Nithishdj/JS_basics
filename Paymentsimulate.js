function fakePaymentAPI(amount){
    return new Promise((resolve)=>
    {
        setTimeout(()=>
            {
                resolve(`Payment of ${amount} success`);
            },2000);
    });
}
async function makePayment() {
    console.log("Process Payment");
    const msg= await fakePaymentAPI(500);
    console.log(msg);
}
makePayment();