/*

node app.js

*/

import { TodoList } from "./todo.js";


const MyTodoList = new TodoList();

MyTodoList.addTasks('Study');

console.log(MyTodoList.listTasks())

