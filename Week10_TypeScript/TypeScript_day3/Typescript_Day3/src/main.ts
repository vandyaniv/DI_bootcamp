// creation dun generique
// < > inside the letter dont matter --

// interface Person<T> {
//   id: number;
//   name: string;
//   age: number;
//   info: T;
// }

// const PersonOne : Person<Person(number | string) [] > = {
//    id : 1,
//    name : 'Marry ',
//    age : 31,
//    info : [ 'female', '173', 'brown', true ]

// }

// console.log(PersonOne)

// function getRandomElement<T>(items: T[]): T {
//    let randomIndex = Math.floor(Math.random() * items.length);
//    return items[randomIndex];
// }

// function Ident = <T>(items : string , id : number, []) => {

// }  X bad answerr should understant better

interface Boolcheck<T> {
  age: T;
  is: boolean;
} // step 1

const isObj = <T>(arg: T): booleanCheck<T> => {};
