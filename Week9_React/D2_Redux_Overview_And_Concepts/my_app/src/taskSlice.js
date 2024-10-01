import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDay: {},
  selectedDay: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },
    addTask(state, action) {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push(task);
    },
    editTask(state, action) {
      const { day, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDay[day];
      const index = tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
      }
    },
    deleteTask(state, action) {
      const { day, taskId } = action.payload;
      state.tasksByDay[day] = state.tasksByDay[day].filter((task) => task.id !== taskId);
    },
  },
});

export const { setSelectedDay, addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
