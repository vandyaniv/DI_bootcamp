import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          {"  "}
          <Link to='/about-me'>About</Link>
          {"  "}
          <Link to='/store'>Shop</Link>
        </nav>
      </header>
    </>
  );
};
export default Nav;
