function unique(arr) {
    let res = []
    for(let i of arr) {
        if(!res.includes(i)) {
            res.push(i)
        }
    }
    return res
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));