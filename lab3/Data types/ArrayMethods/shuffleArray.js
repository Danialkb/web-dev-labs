function shuffle(a) {
    a.sort(() => Math.random() - 0.3)
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)
