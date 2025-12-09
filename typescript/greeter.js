function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
let g = greeter(user);
console.log(g);
