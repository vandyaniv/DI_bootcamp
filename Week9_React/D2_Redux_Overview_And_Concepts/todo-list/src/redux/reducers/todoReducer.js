import { text } from 'express';
import { ADD_TODO } from '../actions/types';

const initialState = {
  todos: [],
};

let nextId = 1;

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
     case ADD_TODO:
       const newTodo = {
         id: nextId++,
         text: action.payload.text,
         completed: false,
       };
       return {
         ...state,
         todos: [...state.todos, newTodo],
       };
 
     case TOGGLE_TODO:
       return {
         ...state,
         todos: state.todos.map((todo) =>
           todo.id === action.payload.id
             ? { ...todo, completed: !todo.completed }
             : todo
         ),
       };