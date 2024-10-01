import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, setSelectedDay } from '../taskSlice';
//

const Tasklist = () => {
  const dispatch = useDispatch();
  const selectDay = useSelector((state) => state.tasks.selectDay);
  const tasks = useSelector((state) => state.tasks.tasksByDay[selectDay] || []);
  //
  const [editTask, setEditTask] = useState(null);
  const [newTaskText, setNewTaks] = useState('');

  const handleDelete = (taskId) => {
    dispatch(deleteTask({ day: setSelectedDay, taskId }));
  };

  const handleEditClick = (tasks) => {
    setEditTask(tasks);
    setNewTaks(tasks.text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTask({
        day: selectDay,
        taskId: editTask.id,
        uptadeTask: { text: newTaskText },
      }),
    );
    setEditTask(null);
    setNewTaks('');
  };
  return (
    <div>
      <h2>Task for the : {selectDay}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTask && editTask.id === task.id ? (
              <form onSubmit={handleSubmit}>
                <input type="text" value={newTaskText} onChange={(e) => newTaskText(e.target.value)} />
                <button type="submit">save</button>
                <button type="button" onClick={() => setEditTask(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                {task.text}
                <button onClick={() => handleEditClick(task)}>edit</button>
                <button onClick={() => handleDelete(task.id)}>delet</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tasklist;
