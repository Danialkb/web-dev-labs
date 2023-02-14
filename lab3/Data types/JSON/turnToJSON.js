let user = {
    name: "John Smith",
    age: 35
};

let user2 = JSON.stringify(user);
console.log(user2)
let user3 = JSON.parse(user2)
console.log(user3)