// 🌟 Exercise 1 : HTML Form

// 🌟 Exercise 2 : HTML Form #2


const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}


const jsonString = JSON.stringify(marioGame);
console.log(jsonString)

let obj = JSON.parse(jsonString)
console.log(obj)

// let lets_try = JSON.stringify(marioGame, (key, value)=>{
//   if (key === 'speed') {
//     return value* 2 {
//       return value;
//     }
//   }
// })

/*


#1. PERSONNAL PLAN :
 convert JSON.stringify(formData);
   
 -- that the idea 💡
 const mario Game = {
    detail {}
    caractere {}
    browser {}
    princess {}
   }

    What happen from that - > ?? it send me all the data in ugly way 
    let's clean that 

#2.   

#3.  When i run i see all the object without any filter not sure to get the question 
*/

