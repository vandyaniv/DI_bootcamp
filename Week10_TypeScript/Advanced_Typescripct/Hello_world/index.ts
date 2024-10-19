// class Employee {
//   private name: string;
//   private salary: number;
//   public position: string;
//   protected department: string;

//   constructor(name: string, salary: number, position: string, department: string) {
//     this.name = name;
//     this.salary = salary;
//     this.position = position;
//     this.department = department;
//   }

//   public getEmployeeInfo(): string {
//     return `Employee Name: ${this.name}, Position: ${this.position}`;
//   }
// }

// const employee = new Employee('John Doe', 50000, 'Software Engineer', 'IT');
// console.log(employee.getEmployeeInfo());

// class Product {
//   readonly id: number;
//   public name: string;
//   public price: number;

//   constructor(id: number, name: string, price: number) {
//     this.id = id ;
//     this.name = name;
//     this.price = price;
//   }

//   public.getProductInfo()
// }

// // # 3 Exercice -
// class Animal {
//   public name: string;
//   public age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   makeSound(): void {
//     console.log('Some generic animal sound');
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }

//   makeSound(): void {
//     console.log(`${this.name} barks`);
//   }
// }

// const myDog = new Dog('Buddy', 3);
// myDog.makeSound();

// // # 4 Exercice -

// class Calculator {
//   static add(a: number, b: number): void {
//     return console.log(a + b);
//   }
//   static subtract(a: number, b: number): void {
//     return console.log(a - b);
//   }
//   static multiply(a: number, b: number): void {
//     return console.log(a * b);
//   }
// }

// console.log(Calculator.add(3, 5));
// Calculator.add(5, 5);
// Calculator.subtract(5, 5);
// Calculator.multiply(5, 5);

// // #5  other Exercice

// exemple cours

interface Personne {
  name: string; // list de propriete avec type
  age: number; // list de propriete avec type
  greet(): void; // list de propriete avec type  " type void "
}

// comment jutilise une interface
// fonction avec propriete pour interface

// // # exercice # 5
// interface User {
//   readonly id: number;
//   name: string;
//   email: string;
// }

// interface PremiumUser extends User {
//   membershipLevel: string;
// }

// function printUserDetails(user: PremiumUser): void {
//   const userDetails = `
//     ID: ${user.id}
//     Name: ${user.name}
//     Email: ${user.email}
//     Membership Level: ${user.membershipLevel}
//   `;

//   console.log(userDetails);
// }

// const premiumUser: PremiumUser = {
//   id: 1,
//   name: 'John',
//   email: 'John@email.com',
//   membershipLevel: 'Gold',
// };

// printUserDetails(premiumUser);
// console.log(premiumUser.id); //
// console.log(premiumUser.name);

// Dayli challenge : Build

// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishYear: number;
  optional?: string; // Pourquoi cela ?
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }
  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find((book) => book.isbn === isbn);
  }
}

const myLibrary = new Library();

myLibrary.addBook({
  title: 'Don Quixote',
  author: 'Miguel De Cerventes',
  isbn: '10. 843167637X',
  publishYear: 1605,
});

console.log(myLibrary);
