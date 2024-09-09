
// 🌟 Exercise 1 : Comparison


// function  compareToTen(num){
//  return new Promise((resolve, reject) => { 
// if ( num <= 10){
//   return resolve('The number is less or equal to ten ')
// }else {reject('the number is superior than the number requiere')}
//   });

// }

// compareToTen(4)
// .then(result => {console.log(result);

// })

// .catch(error => {console.log(error);

// }); 

// function complement_tocompare(num){
//   compareToTen(num)
//   .then (result => {
//     console.log(result);

  
//   })
//   .catch (error => {console.log(error); 

//   });
// }



// 🌟 Exercise 2 : Promises


// function Wait_and_execute(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(duration);
//     }, duration);
//   });
// }

// function Wait_and_fail(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('Reject'));
//     }, duration);
//   });
// } // test

// Wait_and_execute(4000)
//   .then(() => {
//     console.log('Wait 4s');
//   })
//   .catch(error => {
//     console.log('An error occurred:', error);
//   });


// 🌟 Exercise 3 : Resolve & Reject

//

// const PromesResolve = Promise.resolve(3);

// const PromesReject = Promise.reject('Boo !');

// PromesResolve.then(value =>{
//   console.log('The promis is Kept with :', value);
// });

// PromesReject.catch(error =>{
//   console.log('The promis was Reject with by error', error);
// })
// 🎉🚀

// 

//1st Daily Challenge
// start with the easiest 


// function sortSwords(uppercaseWords){
//   return new Promise ((resolve, reject ) => {
// if (uppercaseWords.lenght >= 5){
//   const sorteWords = uppercaseWords.sort();

//   resolve(sortSwords);
// }else{
//   reject(' Error :', Error)
// }


//   })
// }

// sortSwords()
// .then(resolve => {

// })


// function  makeAllCaps(words){
//   return new Promise ((resolve, reject) => {

//     if (!Array.isArray(words)){
//       reject(' Should be an array');
//       return; 
//     }
//     let allString = true; 
//     for (let i = 0; i < words.length; i++)
//   {if (typeof words[i] !== 'string'){
//     allString = false;
//     break 
//   }
// }
// if (allString){
//   let uppercaseWords = [];
//   for (let i = 0; i < words.length; i++){
//     uppercaseWords.push(words[i].toUpperCase())
//   }
//   resolve(uppercaseWords);

// }else{
//   reject('The array should have string only ')
// }
//   })
  
// }

// makeAllCaps([1, "pear", "banana"]);

// function sorteWords (uppercaseWords){
//   return new Promise((resolve, reject) => {

//     if(!Array.isArray(uppercaseWords)){
//       reject(' it can be only an array'); 
//       return
//     }
//     if (uppercaseWords.length >4 ){
//       resolve(uppercaseWords.sort());
//     }else{
//       reject(' the array should have more than 4 "Element" ');
//     }
//   })
// }

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))



const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toMorse(morseJS){
  return new Promise((resolve, reject) => {

    const morseJS = JSON.parse(jsonString);

  })
}