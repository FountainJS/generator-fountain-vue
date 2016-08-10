import TodoItem from './TodoItem.vue';

describe('TodoItem', () => {
  it('should have correct props', () => {
    expect(TodoItem.props).toEqual(['todo']);
  });

  it('should return editing', () => {
    expect(TodoItem.data().editing).toBe(false);
  });

  describe('methods', () => {
    it('should set this.editing of true', () => {
      TodoItem.methods.handleDoubleClick.call(TodoItem);
      expect(TodoItem.editing).toBe(true);
    });

    it('should call actions.completeTodo', () => {
      const completeTodo = jasmine.createSpy('completeTodo');
      TodoItem.completeTodo = completeTodo;
      TodoItem.methods.handleChange.call(TodoItem, 1);
      expect(completeTodo).toHaveBeenCalledWith(1);
    });

    it('should call actions.deleteTodo', () => {
      TodoItem.todo = {id: 2};
      const deleteTodo = jasmine.createSpy('deleteTodo');
      TodoItem.deleteTodo = deleteTodo;
      TodoItem.methods.handleSave.call(TodoItem, '');
      expect(deleteTodo).toHaveBeenCalledWith(2);
    });

    it('should call actions.editTodo', () => {
      TodoItem.todo = {id: 2};
      const editTodo = jasmine.createSpy('editTodo');
      TodoItem.editTodo = editTodo;
      TodoItem.methods.handleSave.call(TodoItem, 'test');
      expect(editTodo).toHaveBeenCalledWith(2, 'test');
    });

    it('should call actions.deleteTodo', () => {
      TodoItem.todo = {id: 2};
      const deleteTodo = jasmine.createSpy('deleteTodo');
      TodoItem.deleteTodo = deleteTodo;
      TodoItem.methods.handleDestroy.call(TodoItem, 3);
      expect(deleteTodo).toHaveBeenCalledWith(3);
    });
  });
});
