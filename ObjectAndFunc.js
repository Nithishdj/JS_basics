let person = {
    name: "Nithish",
    age: 21,
    isStudent: true,
    intrests: ['Playing games', 'listen music'],
    address: {
        city: "Nagai",
        state: "Tamilnadu"
    },
    greeting: function () {
        let msg = `Hai I'm ${this.name}, ${this.age} years old, my intrests are ${this.intrests.join(', ')} and I'm from ${this.address.city}`;
        console.log(msg);
    }
};

person.greeting();
