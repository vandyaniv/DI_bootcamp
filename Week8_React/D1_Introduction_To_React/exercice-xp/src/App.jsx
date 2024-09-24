// import React from 'react';
import Exercise from './Exercice3';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// // // // root.render(` the sum us ${sum(5, 5)}  another way with const : ${totalSum}`);
// // // // EXERCICE 1

// // // // // const myElement = <h1>I Love JSX!</h1>;

// // // // // option : 1
// // // // function sum(a, b) {
// // // //   return a + b;
// // // // }

// // // // // option : 2
// // // // const a_ = 5;
// // // // const b_ = 5;
// // // // const totalSum = a_ + b_;

// // // // // option : 3
// // // // function SumComponent() {
// // // //   const first = 5;
// // // //   const second = 5;
// // // //   const totalFirstandsecond = first + second;
// // // //   return (
// // // //     <div>
// // // //       the som of {first} and {second} is {totalFirstandsecond}
// // // //     </div>
// // // //   );
// // // // }
// // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // root.render(myElement);

// // // // // below 2 option
// // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // root.render(` the sum us ${sum(5, 5)}  another way with const : ${totalSum}`);

// // // // // with other root
// // // // const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// // // // root2.render(SumComponent());

// // // //Exercise 2 : Object

// class App extends Component {
//   render() {
//     const user = {
//       firstName: 'Bob',
//       lastName: 'Dylan',
//       favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
//     };

//     return (
//       <div>
//         <h3>{user.firstName}</h3>
//         <h3>{user.lastName}</h3>
//         <UserFavoriteAnimals favAnimals={user.favAnimals} />
//       </div>
//     );
//   }
// }

// // // // If you want to start measuring performance in your app, pass a function
// // // // to log results (for example: reportWebVitals(console.log))
// // // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // // reportWebVitals();
// export default App;

// Exercice # 3 :

// // // SELECT ALL TO DECOMENT

function App() {
  return (
    <div>
      <Exercise />
    </div>
  );
}

export default App;
