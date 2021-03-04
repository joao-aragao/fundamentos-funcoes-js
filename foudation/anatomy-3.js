const increment1 = function (value) {
    return value + 1
}

// Arrow Function 
const increment2 = (value) => {
    return value + 1
}

console.log(increment1(6))
console.log(increment2(12))

const increment3 = value => {
    return value + 1
}

console.log(increment3(24))

/* Função arrow sem corpo */
const increment4 = value => value + 1

console.log(increment3(200))