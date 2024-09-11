/*

node fileManager.js

*/

import fs from 'fs';

export function readFile(fileName){

  fs.readFile(fileName, 'utf-8', (Error, data ) => {

    if(Error){
      console.log('Error Reading the File', Error);
      return;
    }

    console.log(`There is the CONTENT of ${fileName}`,data);
  })


}

export function writeFile(fileName, content){

fs.writeFile(fileName,content, 'utf-8', (e, data) =>{
  if (e){
    console.log(`Error Writting the File of ${witeFile}`, data);
    return;

  }
  console.log(`the file ${fileName} write  and the f content ${content}:`, data);
});

};
readFile('HelloWorld.txt');
writeFile('HelloWorld.txt', 'HEllo WORLD !!!!!');

writeFile('ByeWorld.txt', 'I am writing now ??');
/// HOURS AND HOURS because i did not call it !