function camelize(str) {
    arr = str.split('-')
    return arr.map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join('')
}

console.log(camelize("background-color"))
