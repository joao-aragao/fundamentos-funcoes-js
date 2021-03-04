// Anonymous function
(function (a, b, c) {
    return a + b + c
});

// Function Expression
const sum = function (a, b) {
    return a + b
}

console.log(sum(7, 1))
const resultado = sum(7, 2)
console.log(resultado)

const anotherSum = sum
console.log(anotherSum(1, 2))