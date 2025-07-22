//you can't use break and return a array
//array.forEach(value,index)
let fruit=["apple","jackfruit","guva"];
fruit.forEach(function(fruit,index){
    console.log(index+":"+fruit);
});
let numbers=[1,2,3];
numbers.forEach(num=>{
    console.log(num*2);
});

let n=[1,2,3];
let doubled=n.map((num)=>num*2);
console.log(doubled);


//converting map() to forEach()
let num=[1,2,3];
let doub=[];//empty array
num.forEach((n1)=>{
    doub.push(n1*4)//n will be multiplied and pushed into doubled
});
console.log(doub);