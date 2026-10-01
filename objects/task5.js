const users = [ 
    { name: "Anna", email: "anna@gmail.com", age: 20 }, 
    { name: "John", email: "john@gmail.com", age: 25 }, 
    { name: "Kate", email: "kate@gmail.com", age: 30 } 
];
for (const user of users) { 
    const { name, email, age } = user;

console.log(name, email, age);
}