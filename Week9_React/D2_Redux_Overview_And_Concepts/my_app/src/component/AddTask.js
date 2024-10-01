import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../taskSlice';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const selectDay = useSelector((state) => state.tasks.selectDay);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    dispatch(addTask({ day: selectDay, task: newTask }));
    setTaskText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="new Task" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
