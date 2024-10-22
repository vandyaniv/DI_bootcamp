"use strict";
// // 🌟 Exercise 1: Intersection Types
// // Define an intersection type PersonWithAddress that combines Person and Address types.
// type PersonWithAddress = Person & Address;
// interface Person {
//   name: string;
//   lastName: string;
//   age: number;
// }
// interface Address {
//   email: string;
//   street: string;
//   city: string;
// }
// const FirstPerson: PersonWithAddress = {
//   name: 'John',
//   lastName: 'Delmarco',
//   email: 'Johnyboy@gmail.com',
//   street: 'JohnSteets',
//   city: 'JohnCitys',
//   age: 24,
// };
// console.log(FirstPerson);  ///  # 1 complete V
// 🌟 Exercise 2: Type Guards with Union Types
// 💡 The idea :   describeValue(5)
// Reponse : This is a number" for numbers.
// type TypeOfInput = string | number;
// function describeValue(value: TypeOfInput): string {
//   if (typeof value === 'string') {
//     console.log('This is a string');
//   } else if (typeof value === 'number') {
//     console.log('This is a number');
//   }
//   return 'Invalid this is undefined ';
// }
// describeValue(5);
// describeValue('hello');
// Completed ✅
//🌟 Exercise 3: Type Casting
// function someValue(value: any) {
//   let stringValue: string = 'String Value';
//   console.log('String Value:', stringValue);
//   console.log(stringValue.length);
//   console.log(stringValue.toLocaleLowerCase);
// }
// someValue('HELLO ');
// someValue('hello day ');
// Completed ✅
// 🌟 Exercise 4: Type Assertions with Union Types
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(['hello', 42]));
// 🌟 Exercise 5: Generic Constraints
// Create a generic function logLength that takes a parameter of type T constrained
function logLength(param) {
    console.log(param.length);
}
logLength(' hello i am the test ');
logLength('one');
// starting
const user1 = {
    type: 'user',
    name: 'Alice',
    age: 28,
};
const user2 = {
    type: 'user',
    name: 'Richard',
    age: 34,
};
const product1 = {
    type: 'product',
    id: 1341,
    price: 20,
};
const order1 = {
    type: 'order',
    orderId: '2035',
    amount: 60,
};
function handleData(dataArray) {
    dataArray.forEach((item) => {
        if (item.type == 'user') {
            const message = `Hello ${item.name}, you are ${item.age} years old`;
            console.log(message);
        }
    });
}
const dataItems = [user1, user2, product1, order1, { type: 'user', name: 'Alice', age: 28 }];
handleData(dataItems);
