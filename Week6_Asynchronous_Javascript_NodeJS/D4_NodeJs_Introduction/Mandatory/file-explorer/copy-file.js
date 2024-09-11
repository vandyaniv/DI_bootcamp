/*

node copy-file.js

*/
import fs from 'fs';

fs.writeFile('source.txt', 'This is the text that should read', (Error) =>{
  if (Error){
    console.log('Error from writting :', Error); 
    return;
  }
  console.log('file written Succesfully ✓')
});

fs.readFile('source.txt', 'utf-8', (Error, data) => {
  if (Error){
    console.log('the error from Reading the file source.txt :');
  }
  console.log('Content of the Data wrote :', data)
});
