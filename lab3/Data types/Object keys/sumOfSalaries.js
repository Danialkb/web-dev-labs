let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let s = 0

for(let i of Object.values(salaries)) {
    s += i
}

console.log(s)
