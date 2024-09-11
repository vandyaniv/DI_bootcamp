// const fs = require("fs");
import fs from 'fs'

// console.log('before');
// // try {
// //     const data = fs.readFileSync('info', 'utf-8');
// //     console.log(data);
// // } catch (e) {
// //     console.log("Error=>", e);
// // }

fs.readFile('info', 'utf-8', (err, data) =>{
    if(err) return console.log(err);
    console.log(data);
})

// console.log('after');

/** write */

let data = "123 456 789";

let users = [
  {
    name: "John",
    email: "jjj@gmail.com",
  },
  {
    name: "aaa",
    email: "aaa@gmail.com",
  },
];

// fs.writeFile("users", JSON.stringify(users), "utf-8", (err) => {
//   if (err) return console.log(err);
// });


// fs.readFile('users', 'utf-8', (err, data)=>{
//     console.log(JSON.parse(data));
// });

/** update */
// fs.appendFile('info', '123456', 'utf-8', err => {

// })

// fs.copyFile('users', 'users', err=> {

// })