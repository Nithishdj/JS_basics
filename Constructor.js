function Student(name,std,gender,age,city,mark){
    this.name = name;
    this.std = std;
    this.gender = gender;
    this.age = age;
    this.city = city;
    this.mark = mark;
}

const student1 = new Student("Adam","8th","male",13,"Chennai",85);
const student2 = new Student("Melody","10th","female",15,"Mumbai",92);
const student3 = new Student("Bob","7th","male",12,"Delhi",77);
const student4 = new Student("Teena","8th","female",14,"Ranchi",95);

console.log(student1.name);
console.log(student1.mark);
console.log(student1.age);
console.log(student1.city);
console.log(student1.gender);
console.log(student1.std);

console.log(student2.name);
console.log(student2.mark);
console.log(student2.age);
console.log(student2.city);
console.log(student2.gender);
console.log(student2.std);

console.log(student3.name);
console.log(student3.mark);
console.log(student3.age);
console.log(student3.city);
console.log(student3.gender);
console.log(student3.std);