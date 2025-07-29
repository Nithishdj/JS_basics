let numbers=[1,2,3,4,5];

numbers.forEach(triple);
numbers.forEach(display);

function triple(element,index,array){
    array[index]=element * 3;
}

function display(element){
    console.log(element);
}

let fruits = ["watermelon","apple","orange","banana"];

fruits.forEach(upperCase);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element,index,array){
    array[index]= element.toUpperCase();
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); 
}

function display(element){
    console.log(element);
}