
/*

node read-directory.js


this part is very abstact to read the path but it can more clear

*/


import fs from 'fs';

fs.readdir('../', (err, file) => {
  if (err){
    console.log('error reading the path :', err);
    return;
  }
file.forEach(file =>{
  console.log(`file : ${file}`)
})
})
