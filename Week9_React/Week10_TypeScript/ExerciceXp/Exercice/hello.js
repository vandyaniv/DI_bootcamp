console.log(' hello world ! ');
var text = 'hello World !';
console.log(text);
var person = {
    name: 'Jean',
    age: 30,
};
// console.log(person);
var createPerson = function (name, age) {
    return {
        name: name,
        age: age,
    };
};
// 🌟 Exercise 9:
function greet(names) {
    console.log("Hello ".concat(names));
}
greet('Marco');
// Dayli Challenge ::
function processInput(input) {
    if (typeof input === 'number') {
        return Math.pow(input, 2);
    }
    else if (typeof input === 'string') {
        return input.toUpperCase();
    }
}
console.log(processInput(5));
console.log(processInput('hello'));
