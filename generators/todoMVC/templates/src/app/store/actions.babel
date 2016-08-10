import * as types from '../constants/ActionTypes';

const makeAction = type => ({commit}, ...args) => commit(type, ...args);

export const addTodo = makeAction(types.ADD_TODO);
export const deleteTodo = makeAction(types.DELETE_TODO);
export const editTodo = makeAction(types.EDIT_TODO);
export const completeTodo = makeAction(types.COMPLETE_TODO);
export const completeAll = makeAction(types.COMPLETE_ALL);
export const clearCompleted = makeAction(types.CLEAR_COMPLETED);
