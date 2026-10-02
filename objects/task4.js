const person = {
    firstName: "John",
    lastName: "Smith",
    age: 30
};

person.email = "john.smith@gmail.com";

delete person.age;

console.log(person);