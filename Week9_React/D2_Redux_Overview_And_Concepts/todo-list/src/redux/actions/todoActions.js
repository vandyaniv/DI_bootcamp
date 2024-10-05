import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from './types';

// // Action Creator pour ajouter une tâche

export const add_todo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

// Action Creator pour basculer le statut dune tâche

export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});
