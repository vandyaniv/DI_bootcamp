import { useContext } from "react";
import { TasksContext } from "../App";
import { REMOVE_TASK } from "../App";

const TaskRemove = ({ id }) => {
  const { dispatch } = useContext(TasksContext);

  const removeTask = () => {
    dispatch({ type: REMOVE_TASK, id });
  };
  return (
    <>
      <button onClick={() => removeTask()}> X </button>
    </>
  );
};
export default TaskRemove;
