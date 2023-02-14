function getAverageAge(a) {
    let s = 0
    for(let i of a) {
        s += i.age
    }
    return s / a.length
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr));