import Counter from "./components/Counter";
import InputText from "./components/InputText";
import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const title = useSelector(state => state.textReducer.text)
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      {count}
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      <Counter />
      <InputText/>
    </>
  );
}

export default App;
