let numbers = [1,2,3,4,5];
let squares = numbers.map(squared);

console.log(squares);

function squared(element){
    return Math.pow(element, 2);
}

let names = ["nithish","harish","naveen","subin"];
let names1 = names.map(upperCase);

console.log(names1);

function upperCase(element){
    return element.toUpperCase();
}