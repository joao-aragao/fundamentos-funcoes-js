// Function declaration

function sayHello() {
    console.log('Hello')
};

sayHello();

/* Template String */
/* Função com parâmetro */
function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}

sayHelloTo('Dex');

/* Função com retorno, mas sem parâmetro */
function returnHi() {
    return 'Hi'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

/* Função com parâmetro e retorno */
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('Bitora'))
