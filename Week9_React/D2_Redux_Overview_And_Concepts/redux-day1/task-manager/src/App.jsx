import { useReducer, useRef, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TasksList from "./components/TasksList";
import "./App.css";

export const TasksContext = createContext();

const initialState = {
  tasks: [],
};

/** Action constants */
const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";

/**
 * [
 *  {id:'jhajhj', name:'task 1', active:true}
 * ]
 */

const taskReducer = (state, action) => {
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks];
    newTasks.push({ id: uuidv4(), name: action.payload, active: true });
    return { ...state, tasks: newTasks };
  } else if (action.type === REMOVE_TASK) {
    const notDeletedTasks = state.tasks.filter((item) => item.id !== action.id);
    return { ...state, tasks: notDeletedTasks };
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    dispatch({ type: ADD_TASK, payload: value });
    inputRef.current.value = "";
  };

  return (
    <>
      <h2>Task Manager</h2>
      <div>
        <input placeholder='Add Task...' ref={inputRef} />
        <button onClick={() => addTask()}>Add</button>
      </div>
      <div>
        <h2>List of Tasks</h2>
        <TasksContext.Provider value={{ state, dispatch }}>
          <TasksList />
        </TasksContext.Provider>
      </div>
    </>
  );
}

export default App;
