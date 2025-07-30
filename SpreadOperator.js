const arr1 = [1,2,3];
const arr2 = [...arr1];//shallow copy
arr1.push(4);
console.log(arr1);
console.log(arr2);

const original = [1,2];
const extended = [...original,3,4];
console.log(original);
console.log(extended);

//Destructing Array
const[first,...rest] = [10,20,30,40];
console.log(first);
console.log(rest);

//Destructing objects
const users = {name : 'Ram',age : 18,city : 'Paris'};
const{name,...other} = users;
console.log(name);
console.log(other.age);
console.log(other.city);