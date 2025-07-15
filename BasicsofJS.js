var age=25;
var age=26;
console.log("The age is "+age);

const a=10;
const b=20;
const sum=a+b;
console.log("The sum of two numbers is "+sum);

let a2=23;
let a3=42;
const c=a2+a3;
console.log("The sum is "+c);

greet();/*Function declaration are fully hoisted with their body,
so you call it before it's defined */
function greet(){
    console.log("Hello SLA");
}

var a1;//hoisted declaration(let & const)
a1=10;//undefined
console.log(a1);//assignment happens

