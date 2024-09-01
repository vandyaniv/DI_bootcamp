// var can be declared after it's use. the value will be undefined until you define it yourself.
// var can be redeclared, let and const can't

console.log(x);
var x = 5 

var x = 10  
var x = 20
console.log(x);

let y = 10;
let y = 5; // not ok
y = 50 // ok

//-----------------------
// things can see outside their scope but the outside can't see inside.
// this is global scope, seen by all
function test() {
    //this is the function block scope
    let z = 10;
    console.log(y);
    let y = 20;
}

test();
console.log(z);

function checkAge(age) {
    let message= ''
    if (age < 18) {
        message = "Sorry, you're too young.";
    } else {
        message = "Yay! You're old enough!";
    }

    return message;
}

console.log(checkAge(21));

//------------------
// default parameters make sure that there's always a value for the parameter, even if it's not present in the callback

function hello(name = 'world') {
    console.log('Hello ' + name);
}

hello()

//------------------------------------------
// ternary operator is a shortcut for if else statements. use it for small and short things



// here's the syntax for one condition:
condition ? 'if true' : 'if false'

// and what it will look like without:
if (condition) {
    
} else {
    
}

// here's the syntax for multiple conditions:
function example() {
    return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}

// and what it will look like without:
function example() {
    if (condition1) {
    return value1;
    } else if (condition2) {
    return value2;
    } else if (condition3) {
    return value3;
    } else {
    return value4;
    }
}

function checkAge(age) {
    return age > 18 ? 'is over 18' : 'not over 18'

    // and what it will look like without:
    if (age > 18) {
        return 'is over 18'
    } else {
        return 'not over 18'
    }
}

console.log(checkAge(21));

function checkYear() {
    let year = prompt('Please enter a year:')
    return year > 2000 && year < 3000 ? 'You are in the 21st century' : 
    'You live in the Middle Age'
}

console.log(checkYear());

//-------------------------
// use backtick (``) instead of "" and '' for easy formatting

let name = 'Nadav'
let time = 'morning'

// insert variables straight into the string
let str1 = `hello
${name}, how are you? what a lovey ${time}`

let str2 = 'hello \n' + name + ' how are you? what a lovey ' + time

//--------------------------------------
// function declaration are hoisted the to top, others aren't
say()
function say(params) {
    console.log('hello world');
}

const func = function (params) {

}

const func2 = (params) => {

}

// you can remove the () if you have one parameter
const say2 = name => {
    console.log(name);
}

//arrow functions can became very small
const KGtoG = num => num * 1000

function KGtoG2(num) {
    return num * 1000
}

const calc = (num1, num2, op) => 
    op === '+' ? num1 + num2 :
    op === '-' ? num1 - num2 :
    op === '*' ? num1 * num2 :
    'invalid operation'

// -------------------------

// you can put a function inside a function
(function KGtoG2(num) {
    console.log(num * 1000);
})(3)

const funcOut = (num) => {
    const funcIn = () =>{
        return num * 2
    }
    funcIn()
    return num + 10
}

function funcOut(x) {
    function funcIn(y) {
        return x + y
    }
    return funcIn
}

let funcOut3 = funcOut(3)
console.log(funcOut3);

let funcIn5 = funcOut3(5)
console.log(funcIn5);


console.log(funcOut(3)(5));

const shotFunc = x => y => x + y 

console.log(shotFunc(60)(40));

// you can use nested function to make very modular functions
function logger(prefix) {
    return function (message) {
        console.log(`${prefix}: ${message}`);
    };
}

const errorLogger = logger("ERROR");
const infoLogger = logger("INFO");

errorLogger("Something went wrong!");
infoLogger("This is an informational message.");

//----------------

// primitive variables can be copied
let a = 5
let b = a

// non primitive variables are copied from reference
let x = {greeting: 'Hey!'}
let x2 = {greeting: 'Hey!'}
let y = x

//-------------------
//looks for parts of string
let str = 'Hello world'
str.includes('wor')

// looks for matches in the array
let arr = [1, 2, 3, 4, 5]
arr.includes(3)

// syntax: (/[the letters that you what to replace/ (add g after the / to replace all and not just the first)])
console.log(str.replace(/[oe]/g, 'u'));

// will add letters or spaces until the string is the number's length
console.log(str.padStart(17, 'bla'));

// will flatten an arrays inside arrays into a single array
let arr2 = [1,2,3,[4,5,[6]]]
console.log(arr2.flat(2));

//---------------------

const obj = {
    key: 'value'
}

// how to access:
console.log(obj.key);
console.log(obj['key']);

obj.key = 'value2' // edit
obj.name = 'Nadav' // add

// another way to add:
let prop = 'age'
obj[prop] = 26

console.log(obj);

// how to loop:
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`the key of ${element} is ${key}`);
    }
}