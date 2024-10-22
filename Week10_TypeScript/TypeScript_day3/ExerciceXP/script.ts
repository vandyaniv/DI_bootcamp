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

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(['hello', 42]));

// 🌟 Exercise 5: Generic Constraints

// Create a generic function logLength that takes a parameter of type T constrained

function logLength<T extends { length: number }>(param: T): void {
  console.log(param.length);
}

logLength(' hello i am the test ');
logLength('one');

// completed ✅

// // 🌟 Exercise 6: Intersection Types And Type Guards

// 1 # Define a type Employee
//  that combines Person and Job using intersection types.

// type Person = {
//   name: string; // type A
//   age: number;
// };

// type Manager = {
//   role: 'Manager';
//   departement: string;
// };

// type Developer = {
//   role: 'Employe';
//   departement: string;
// };

// type Job = Developer | Manager;
// type Employe = Person & Job; // ! using intersection

// //  2 #  Create a function describeEmployee that takes an Employee object
// //   uses type guards to return a description based on whether the Job is a Manager or a Developer.
// function describeEmployee(employe: Employe) {
//   if (employe.role === 'Manager') {
//     console.log(`${employe.name} works as ${employe.role} `);
//   }
// }

// const employe1: Employe = {
//   name: 'Alice',
//   age: 30,
//   role: 'Manager',
//   departement: 'sell',
// };

// describeEmployee(employe1);

// completed ✅
// Dayli - Challenge
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

// starting

const user1: User = {
  type: 'user',
  name: 'Alice',
  age: 28,
};

const user2: User = {
  type: 'user',
  name: 'Richard',
  age: 34,
};

const product1: Product = {
  type: 'product',
  id: 1341,
  price: 20,
};

const order1: Order = {
  type: 'order',
  orderId: '2035',
  amount: 60,
};

type DataItem = User | Product | Order;

function handleData(dataArray: DataItem[]): void {
  dataArray.forEach((item) => {
    if (item.type == 'user') {
      const message = `Hello ${item.name}, you are ${item.age} years old`;
      console.log(message);
    } else (item.type == 'product') {
      const product_Message = ` The produc Id ${item.orderId}`
    }
  });
}

const dataItems: DataItem[] = [user1, user2, product1, order1, { type: 'user', name: 'Alice', age: 28 }];

handleData(dataItems);
