/**
 * Object & Classes
 */

/** JS data type */
let user = {
  name: "John",
  email: "jjj@gmail.com",
  age: 25,
};
user.gender = "M";
// let obj1 = new Object();
// console.log(user);
// console.log(obj1);
// console.log(user.name);
// console.log(user["age"]);

/** looping an object */
// for(const key in user){
//     console.log(key, user[key]);
// }

/** Object methods */
/** Object.keys */

let keys = Object.keys(user);
// console.log(keys);

keys.forEach((item) => {
  // console.log(item, user[item]);
});

/** Object.values */
let values = Object.values(user);
// console.log(values);

let userAdd = Object.values(user).map((item) => {
  return item + " :) ";
});

// console.log(userAdd);

/** Object.entries */
let ents = Object.entries(user);
// console.log(ents);

Object.entries(user).forEach(([a, b]) => {
  //   const [key, value] = item;
  //   console.log("item=>", a, b);
});

/** Object.fromEntries */
let arr = [
  ["name", "Mark"],
  ["age", 35],
];

let user1 = Object.fromEntries(arr);
// console.log(user1);

/** Object method */
/** this */
// console.log(this);

// let student = {
//   name: "Marry",
//   age: 23,
//   hello: function () {
//     console.log(this.name);
//     const hello2 = () => {
//       console.log(this.name);
//     };
//     hello2();
//   },
//   x: () => {
//     console.log(this);
//   },
// };

// console.log(student);

// student.hello();

/** clone an object */
/** object & array are by refrence */

// let student = {
//   name: "Marry",
//   age: 23,
//   address: {
//     city: "TLV",
//   },
//   hello: function () {},
// };

// let student2 = { ...student };
// let student3 = Object.assign({}, student);

// student2.name = "Anne";
// student2.address = {...student.address}
// student2.address.city = "NY";

// console.log("student=>", student);
// console.log("student2=>", student2);
// console.log("student3=>", student3);

/** deep cloning */
/** JSON
 * stringify
 * parse
 *
 */
// let jsonStudent = JSON.stringify(student);
// console.log(student);
// console.log(jsonStudent);

// let newStudentFromJson = JSON.parse(jsonStudent);

// newStudentFromJson.address.city = "NY";
// console.log(newStudentFromJson);
// console.log(student);

/** spreading */
// let student = {
//   name: "Marry",
//   age: 23,
// };

// let student2 = {
//   ...student,
//   name: "Anne",
//   address: { city: "TLV", zip:{code:'2345667'} },
//   gender: "F",
// };
// console.log(student2);

/** destructuring */
// let arr1 = [1, 3];
// const [b, a] = arr1;

// const name = student.name;
// const age = student.age;

// const {age, name} = student
// console.log(age,name);

/** nested object destructuring */
// let student = {
//   name: "Marry",
//   age: 23,
//   address: {
//     city: "NY",
//     country: "USA",
//   },
// };

// const example = (obj) => {
//   const {
//     name,
//     age,
//     address: { city, country },
//   } = obj;
//   console.log(name, age, city, country);
// };
// example(student);

/** classes */

class NameOfClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.gender = "F";
  }
  method() {}
  method2 = () => {};
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
}

class Animal {
  constructor(type, name) {
    this.name = name;
    this.type = type;
  }
  getType() {
    return this.type;
  }
  getName() {
    return this.name;
  }
}

const myDog = new Animal("Dog", "Shadow");
const urDog = new Animal("Dog", "Spots");
const myCat = new Animal("Cat", "CatCat");

// let animalArr = [myDog, urDog, myCat];
// console.log(animalArr);

console.log(myDog.getName(), myDog.name);
// console.log(urDog.getName());
// console.log(myCat.getName(), myCat.getType());

class Dog extends Animal {
  constructor(name, color) {
    super("Dog", name);
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  getName() {
    return "I love my " + this.name;
  }
}

const lavrador = new Dog("Kuku", "white");
console.log(lavrador.getName(), lavrador.getType(), lavrador.getColor());

/**
 * Create a User class
 * Store the name of the user in a "name" variable
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exetends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends User {
  constructor(name) {
    super(name);
  }
}

class SpecialStudent extends Student {
  constructor(name, type) {
    super(name);
  }
}

const arrayOfStudents = [
  new Student("Daria"),
  new Student("Filip"),
  new Student("Shira"),
];

arrayOfStudents.forEach((item) => item.hello());
