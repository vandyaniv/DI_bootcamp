/* #1 answer : 
if will be ///     alert(`inside the funcOne function 3`);

 / #1.2  if it was const the value will be 5 and i wll get an error 
 we can't change the const However Let will work 

*/
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

/* #2  Answer :
as i say before before with let it work but if we change to const 
an error will appaer because we cannot change it 
 */
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}
/* #3

 */
function funcFour() {
  window.a = 'hello';
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

/* #4
 */

/* #5
 */

// next exo

//🌟 Exercise 2 : Ternary Operator

//#1
const winBattle = () => true;

// #2

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

//🌟 Exercise 3 : Is It A String ?

// const isString = (value) => {
//   if(typeof value === 'string' ){
//     return true
//   }else{
//     return false
//   }
// };
// const isString = (value) => {
// return typeof (value) === 'string' ?  true :  false
// };
// console.log(isString(1))


// console.log(isString('23'));
//true

// const value="danniel";
// if (typeof value ==='string'){
//   console.log(true)
// }else{
//   console.log(false)
// }

// const func = (x,y)=>{
//   console.log("hello from before if statement")

//  if (x>y){
//   return "x is bigger"
//  }else{
//   return "y is bigger"
//  }

//  console.log("hello from after if statement")
// }
// console.log(func(2,1))

/*const func = ()=>{
  
  console.log("before")
   
  console.log("after")
  return
}
func() */

//🌟 Exercise 4 : Find The Sum


const func = (a, b) => {
  return console.log(a+b)
};

func(1,4)

// 🌟 Exercise 5 : Kg And Grams

// const func3 = (kg) => {

//   return (g)
// }
// const func3 = (kg) => prompt(' enter wight') {

  
// }

// let weight = Kilo;

// const userAnswer= prompt('please enter the weight in kilo ');

// // const kiloToGrams = (value) => {
// //   console.log(value) 
// // }
// // kiloToGrams(userAnswer)

// const kiloToGrams = (value) => {

//   console.log(value*1000)
// }
// kiloToGrams(userAnswer)

//🌟 Exercise 6 : Fortune Teller
//Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.



// const fortune_teller = (number_of_children, partners_name, geographic_location, job_title)  => {

//   const fortune_display = `You will be a ${job_title} in ${geographic_location} and married to ${partners_name} with ${number_of_children} kids. `

//   const newDiv = document.createElement('div');

//   newDiv.textContent = fortune_display;

//   document.body.appendChild(newDiv);

// };

// fortune_teller( 'enginer', 'Madrid', 'Sofia', '5' );

//🌟 Exercise 7 : Welcome

// function say(user_div) {
//   const createElement_tonav = document.createElement('div');
//   createElement_tonav.textContent = `Welcome, ${user_div}`;

//   const select_nav = document.querySelector('.navbar');

//   select_nav.appendChild(createElement_tonav)
// }

// say('Alex')


//🌟 Exercise 8 : Juice Bar

// function makeJuice(size) {
//   function addIngredients (ingredient1, ingredient2, ingredient3){
//     const sentence = ` The client wants a ${size} juice containing ${ingredient1}, ${ingredient2}, ${ingredient3}`

//     // in the DOM 
//     const newdiv = document.createElement('div'); 
//     newdiv.textContent = sentence;
//     document.body.appendChild(newdiv);

//   }
//   addIngredients ('apple', 'juice', 'orange');

// }
// makeJuice('small')


//Part II 

function makeJuice(size) {

  const ingredient = [];
  function addIngredients (ingredient1, ingredient2, ingredient3) {
    ingredient.push(ingredient1,ingredient2, ingredient3);
  }

  {
    const sentence = ` The client wants a ${size} juice containing ${ingredient1}, ${ingredient2}, ${ingredient3}`

    // in the DOM 
    const newdiv = document.createElement('div'); 
    newdiv.textContent = sentence;
    document.body.appendChild(newdiv);

  }
  addIngredients ('apple', 'juice', 'orange');

}
makeJuice('small')
