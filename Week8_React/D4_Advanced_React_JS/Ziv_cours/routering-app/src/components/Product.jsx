import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = (props) => {
  const [desc, setDesc] = useState("");
  const [count, setCount] = useState(0);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  useEffect(() => {
    // fetch product by id
    if (params.id == 1) {
      setDesc("amazing car");
    } else if (params.id == 2) {
      setDesc("the best car ever");
    }
    if (count > 5) {
      navigate("/home");
    }
  }, [count]);

  const toShop = () => {
    navigate("/store");
  };
  
  return (
    <>
      <h2>Product #: {params.id}</h2>
      <p>Description: {desc}</p>
      <Link to='/store'>Continue Shoping</Link>
      <div>
        <button onClick={() => toShop()}>Navigate to shop</button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          {count}{" "}
        </button>
      </div>
    </>
  );
};
export default Product;
