/*

node todo.js

*/


 class TodoList{
  constructor(){
    this.tasks = [];

  }
  addTasks(tasks){
    this.tasks.push(tasks)
  }

completeTask(index){
  this.tasks[index] = this.tasks[index] + 'Complet ✔︎';

}
//3 
listTasks(){
  return this.tasks;
}
}

export { TodoList };

