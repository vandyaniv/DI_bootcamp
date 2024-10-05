import { useDispatch } from "react-redux";
import { changeTitle } from "../redux/textAction";

const InputText = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => dispatch(changeTitle(e.target.value))} />
    </div>
  );
};
export default InputText;
