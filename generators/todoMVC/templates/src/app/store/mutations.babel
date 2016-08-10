import * as ActionTypes from '../constants/ActionTypes';

export const initialState = {
  todos: [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ]
};

export default {
  [ActionTypes.ADD_TODO](state, text) {
    state.todos.unshift({
      id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text
    });
  },
  [ActionTypes.DELETE_TODO](state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  [ActionTypes.EDIT_TODO](state, id, text) {
    state.todos = state.todos.map(todo =>
      todo.id === id ?
        Object.assign({}, todo, {text}) :
        todo
    );
  },
  [ActionTypes.COMPLETE_TODO](state, id) {
    state.todos = state.todos.map(todo =>
      todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo
    );
  },
  [ActionTypes.COMPLETE_ALL](state) {
    const areAllMarked = state.todos.every(todo => todo.completed);
    state.todos = state.todos.map(todo => Object.assign({}, todo, {
      completed: !areAllMarked
    }));
  },
  [ActionTypes.CLEAR_COMPLETED](state) {
    state.todos = state.todos.filter(todo => todo.completed === false);
  }
};
