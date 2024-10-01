import React from 'react';
import AddTask from './component/AddTask';
import DatePicker from './component/DatePicker';
import TaskList from './component/TaskList';

function App() {
  return (
    <div>
      <h1>Planner Application </h1>
      <DatePicker />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
