import { useDispatch, useSelector, connect } from "react-redux";

import { add, minus, INCREMENT } from "../redux/actions";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);

  const dispatch = useDispatch();
  return (
    <>
      <h2>Redux Counter</h2>
      <button onClick={() => dispatch(add(5))}> + </button>
      {count}
      <button onClick={() => dispatch(minus())}> - </button>
    </>
  );
};
export default Counter;
