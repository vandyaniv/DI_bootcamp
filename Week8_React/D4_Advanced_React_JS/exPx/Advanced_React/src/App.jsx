// import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import ErrorBoundary from './ErrorBoundary';
// import Mynav from './navbar';

// const HomeScreen = () => (
//   <div className="container mt-4">
//     <h1>Home</h1>
//   </div>
// );

// const ProfileScreen = () => (
//   <div className="container mt-4">
//     <h1>Profile</h1>
//   </div>
// );

// const ShopScreen = () => {
//   throw new Error('Something went wrong in the Shop');
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Mynav />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ErrorBoundary>
//               <HomeScreen />
//             </ErrorBoundary>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <ErrorBoundary>
//               <ProfileScreen />
//             </ErrorBoundary>
//           }
//         />
//         <Route
//           path="/shop"
//           element={
//             <ErrorBoundary>
//               <ShopScreen />
//             </ErrorBoundary>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------------------------
// E X E R C I C E  - #  2
//---------------------------------------------------------------------------------------------------------

// function App() {
//   return (
//     <div className="App">
//       <PostList />
//     </div>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------------------------

// E X E R C I C E  -  # 3  *Display JSON Data And Parse It

//---------------------------------------------------------------------------------------------------------
import React from 'react';
import './App.css';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

class App extends React.Component {
  render() {
    return (
      <div>
        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    );
  }
}

export default App;

//---------------------------------------------------------------------------------------------------------

// E X E R C I C E  -  #4 miss

//---------------------------------------------------------------------------------------------------------
