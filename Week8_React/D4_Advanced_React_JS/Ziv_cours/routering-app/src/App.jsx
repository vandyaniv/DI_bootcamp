import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Product from "./components/Product";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

// import { Route, Routes, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <About />,
      },
      {
        path: "/store",
        element: <Shop />,
      },
      {
        path: "/prd/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  );
}

export default App;
