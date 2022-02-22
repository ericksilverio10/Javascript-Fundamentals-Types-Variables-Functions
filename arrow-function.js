//BASIC FUNCTION
function sum(a, b){
    return a + b;
}
console.log(sum(10,5))
//15

function hello(name) {
    return `Hello, my name is ${name}!`;
}
console.log(hello('Erick'));
//Hello, my name is Erick!

//ARROW FUNCTION
const arrowSum = (a, b) => a + b;
console.log(arrowSum(1,1));
//2

const arrowHello = myName => `Hello, my name is ${myName}!`;
console.log(arrowHello('Anna'));
//Hello, my name is Anna!

const sumLittleNumbers = (a, b) => {
    if (a || b > 10){
        return "Choose a smaller number"
    } else{
        return a + b;
    }
}
console.log(sumLittleNumbers(9,9))
