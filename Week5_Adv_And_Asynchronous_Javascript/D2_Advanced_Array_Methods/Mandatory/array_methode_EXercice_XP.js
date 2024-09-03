// //🌟 Exercise 1 : Colors

// // #1.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// // colors.forEach(function display_color (colors, index){
// //    {
// //     console.log(index)
// //   }
// // })

// colors.forEach(colors, index) =>{
//    console.log(`${color} #${index+1} `)
  
// }

// function display_color(colorsArray){
//   let answer=false;
//   colorsArray.forEach((color, index)=>{
//     if (answer ==true){
//   return   answer }
//     color === "Violet"?answer=true:answer=false;
    
//   })
// return answer
// }

// const isColor=display_color(colors)
// console.log(isColor)
// // #1.2

// // let answer= colors.some((color) =>{
// //  return color === "Violet"
// // });

// // answer?console.log("yes"):"no"



// 🌟 Exercise 2 : Colors #2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];


// const display_in_order = (color, index) => {
//   let position = index +1; 
//   let position_ord = 
//   (position === 1) ? (ordinal [1]) :

//   (position === 2) ? (ordinal [2]) :
//   (position === 3) ? (ordinal [3]) : 
//   (position === 4) ? (ordinal [4]) : 
//   (position === 5) ? (ordinal [5]) : 
//   (position === 6) ? (ordinal [6]) :

//   (position === 7) ? (ordinal [7]) :
// ordinal[0];
//   console.log(`${position} ${position_ord} choice is ${color}`);
  
// };

// colors.forEach(display_in_order)


//16-45 ret

//🌟 Exercise 3 : Analyzing



// //------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// // answer 
// // spead operator =  the spread ... will add all the table output will be 
// // 'bread', apple, orange 
// ------2------
// const country = "USA";
// console.log([...country]);
// //so that mean if we have only one object on the string he will be deconstruct = mean that we see [ 'u', 's', 'a']
// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// // good one ! console.log = '.'.'



// 🌟 Exercise 4 : Employees


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//  const doubled = numbers.map(value => value * 2);

// Answer = ex 4 
//const sayHello = users.map(firstName =>(
//   console.log(`Hello ${users}`)
// ));
// const firstNames = users.map(sayHii =>{
//   return console.log(` hello ${sayHii.firstName}`)};

// const firstNames = users.map(sayHii => {
//   return `Hello ${sayHii.firstName}`;
// });

// console.log(firstNames)

// ex 4.2 

// const filtering = users.filter(person =>{
//   return person.role === 'Full Stack Resident';
// });
// console.log(filtering)

//  bonus anser 4.3
// const filtering = users.filter(person =>{
//   return person.role === 'Full Stack Resident';
  
// });

// const lastn = filtering.map(only => {
//   return only.lastName;});

// console.log(lastn)

//🌟 Exercise 5 : Star Wars

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const all_exclusif = epic.reduce((total, value) =>{
//   return total + ' ' + value;
// })
// console.log(all_exclusif)

//🌟 Exercise 6 : Employees #2


// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//   {name: "Liam", course: "Computer Science", isPassed: false}, 
//   {name: "Jenner", course: "Information Technology", isPassed: true}, 
//   {name: "Marco", course: "Robotics", isPassed: true}, 
//   {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//   {name: "Jamie", course: "Big Data", isPassed: false}];


// const mazaltov = students.filter(person =>{
//   return person.isPassed;
// });

// console.log(mazaltov)