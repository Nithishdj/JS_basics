//Object
//name,age,isStudent are key.Ram,47,true are values
let person={
    name:"Ram",
    age: 21,
    isStudent: true
};
console.log(person.name);
person.city="New York";
console.log(person.city);
delete person.isStudent;//deleted
console.log(person.isStudent);
//printing the obj
for(let key in person){
    console.log(key+":"+person[key]);
}
//obj using function
let user={
    name:"Alice",
    greet:function(){
        console.log(this.name);
    }
};
user.greet();

//Array of object
let flowers=[
    {name:"rose",type:"flowering",color:"red"},
    {name:"fern",type:"non-lowering",color:"green"},
];

//loop through all flowers
flowers.forEach(flowers=>{
    console.log(`${flowers.name} is a ${flowers.type} plant is usually ${flowers.color}.`);
});