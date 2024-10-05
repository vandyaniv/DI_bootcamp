import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Product from "./components/Product";
import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path='/home' element={<Home />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/store' element={<Shop />} />
        <Route path='/prd/:id' element={<Product />} />
        <Route
          path='*'
          element={<h2>404 Oppsss... this page does not exists</h2>}
        />
      </Routes>
    </>
  );
}

export default App;

/**
 * Create a Shop page/component with 2 products
 * <div>
        <h2>Product 1</h2>
        <p>100$</p>
        <Link>More Info</Link>
      </div>
  * add this Shop to the menu
  * add a Product component/page
 */
