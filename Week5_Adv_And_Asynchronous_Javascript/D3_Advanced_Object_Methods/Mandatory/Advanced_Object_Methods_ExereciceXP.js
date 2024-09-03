

// // 🌟 Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
//   //destructuring
//   const {first, last} = objUser;
// // console.log(objUser);
// console.log(` Hello, your full name is ${first} ${last}`)

// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});


//🌟 Exercise 3: User & Id

// //# 1. 
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// console.log(Object.entries(users));

// #1.2

// const twicing = Object.entries(users);

// twicing.forEach( [keys, values], index, arr => {
//   arr[index] = [key, values*2]
 
// });

// console.log(twicing);

// # Yallah !1 another oppurtinity !

// const valu_e = []
// Object.keys(users).forEach((values)=>{
// valu_e.push((values*2))
// })


// 💡 answer below #1.2 ⬇️

// Object.keys(users).forEach(values =>{
//   users[values]*=2;
 
// })

// console.log(users)


//🌟 Exercise 5 : Dog Class
//Analyze the options below. Which constructor will successfully extend the Dog class?
// wich one of them will successfully extend ?


// #1 why that ? heritage, recieve from the class parent Dog, also give the right constructor 


//🌟 Exercise 6 : Challenges


// const object1 = { number: 5 };  // key : value 5
// const object2 = object1;  // key : value 5 take from object1 
// const object3 = object2;  // object3 is like object2 a reference for key : value = 5
// const object4 = { number: 5}; //  object4 = key : value5 is 5 

// object1.number = 4; // here object.value = 4 we change the first object 5 to 4 
// console.log(object2.number)// { number: 5 };
// console.log(object3.number) //{ number: 5 };
// console.log(object4.number) // { number: 5 };

//🌟 PART 2 📍

// #1.
 
// class Animal {
//   constructor (name, type, color){
//     this.name = name;
//     this.type = type;
//     this.color = color;

//   }
// }

// class Mammal extends Animal{
//   constructor(name, type, color, sound){
// super(name,type,color);
// this.sound =sound;

//   }
// sound_of(){
//   return `the ${this.name} is an ${this.type} and is color ${this.color} and make sound like ${this.sound}`;
// }
// }

// // the{black} {dog} is a {type} and {sound}
// let myanimal = new Mammal ('dog', 'animal', 'black', 'woof');

// let farmerCow = new Mammal ('cow', 'animal', 'white', ' mooo')

// 🚀 Dayli Challenge 

/*  
1 - create class Vide -⚙️param (title {string}, uploader{the person}, time [number], )
2 - method (){ -> display | title, person , time in sec,  }
3 - super ( )  
  -3 create a new obejct from the class that use the attribut from 
*/



// 👨‍🚀 answer below 
// class Video {
//   constructor (title, uploader, time){
//     this.title = title;
//     this.uploader = uploader;
//     this.time = time ;
//   }

// show_me_marcopolo(){
//   return `The video title is ${this.title} was upload by ${this.uploader} and the duration ${this.time} second `;


// }

// watch(){
//   return `${this.uploader} watched all ${this.time} second of ${this.title}`;
// }
// }
// let thevideo = new Video ('exploring the amazon', 'MarcoPolo', 4456);
// let theothervideo = new Video ('AceVenture', 'Francky', 3600 )

// console.log(thevideo.show_me_marcopolo()); 
// console.log(theothervideo.show_me_marcopolo()); 


// console.log(thevideo.watch());
// // # 1
