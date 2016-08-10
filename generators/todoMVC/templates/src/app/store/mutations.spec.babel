import mutations from './mutations';
import * as types from '../constants/ActionTypes';

describe('todos reducer', () => {
  it('should handle ADD_TODO', () => {
    const addTodo = mutations[types.ADD_TODO];
    const state = {todos: []};
    addTodo(state, 'Run the tests');
    expect(state.todos).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);

    state.todos = [{text: 'Use Redux', completed: false, id: 0}];
    addTodo(state, 'Run the tests');
    expect(state.todos).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);

    state.todos = [
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ];
    addTodo(state, 'Fix the tests');
    expect(state.todos).toEqual([
      {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }, {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle DELETE_TODO', () => {
    const deleteTodo = mutations[types.DELETE_TODO];
    const state = {todos: [
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]};
    deleteTodo(state, 1);
    expect(state.todos).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle EDIT_TODO', () => {
    const editTodo = mutations[types.EDIT_TODO];
    const state = {todos: [
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]};
    editTodo(state, 1, 'Fix the tests');
    expect(state.todos).toEqual([
      {
        text: 'Fix the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle COMPLETE_TODO', () => {
    const completeTodo = mutations[types.COMPLETE_TODO];
    const state = {todos: [
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]};
    completeTodo(state, 1);
    expect(state.todos).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle COMPLETE_ALL', () => {
    const completeAll = mutations[types.COMPLETE_ALL];
    const state = {todos: [
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]};
    completeAll(state);
    expect(state.todos).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: true,
        id: 0
      }
    ]);

    // Unmark if all todos are currently completed
    completeAll(state);
    expect(state.todos).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle CLEAR_COMPLETED', () => {
    const clearCompleted = mutations[types.CLEAR_COMPLETED];
    const state = {todos: [
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]};
    clearCompleted(state);
    expect(state.todos).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
    const completeTodo = mutations[types.COMPLETE_TODO];
    const clearCompleted = mutations[types.CLEAR_COMPLETED];
    const addTodo = mutations[types.ADD_TODO];
    const state = {todos: [
      {
        id: 0,
        completed: false,
        text: 'Use Redux'
      }, {
        id: 1,
        completed: false,
        text: 'Write tests'
      }
    ]};
    completeTodo(state, 0);
    clearCompleted(state);
    addTodo(state, 'Write more tests');
    expect(state.todos).toEqual([
      {
        text: 'Write more tests',
        completed: false,
        id: 2
      }, {
        text: 'Write tests',
        completed: false,
        id: 1
      }
    ]);
  });
});
