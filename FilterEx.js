let numbers = [1,2,3,4,5,6];
let evenNum = numbers.filter(isEven);
let greater = numbers.filter(greaterThan3);

console.log(evenNum);
console.log(greater);


function isEven(element){
    return element % 2===0;
}

function greaterThan3(element){
    return element > 3;
}