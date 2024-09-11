/* 

node read-file

*/

import fs from 'fs';



export function readFile(){

fs.readFile('./file/file-data.txt', 'utf-8', (err, data) => {
  if (err){
    console.log('error reading the file :', err);
    return;
  }
  console.log('Error file :', data);
})
}

readFile()
