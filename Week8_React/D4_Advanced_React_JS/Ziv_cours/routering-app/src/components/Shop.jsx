import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <>
      <h2>Shop</h2>
      <Link to='/prd/1'>
        <div>
          <h2>Product 1</h2>
          <p>100$</p>
          <Link to='/prd/1'>More Info</Link>
        </div>
      </Link>
      <div>
        <h2>Product 2</h2>
        <p>100$</p>
        <Link to='/prd/2'>More Info</Link>
      </div>
    </>
  );
};
export default Shop;
