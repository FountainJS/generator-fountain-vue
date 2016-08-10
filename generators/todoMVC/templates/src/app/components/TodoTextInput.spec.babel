import TodoTextInput from './TodoTextInput.vue';

describe('TodoTextInput', () => {
  it('should have correct props', () => {
    expect(TodoTextInput.props).toEqual(['text', 'editing', 'newTodo', 'placeholder', 'onSave']);
  });

  it('should call $el.focus', () => {
    const focus = jasmine.createSpy('focus');
    TodoTextInput.$el = {focus};
    TodoTextInput.ready();
    expect(focus).toHaveBeenCalled();
  });

  describe('methods', () => {
    it('should call onSave', () => {
      TodoTextInput.input = 'hello';
      TodoTextInput.newTodo = false;
      const onSave = jasmine.createSpy('onSave');
      TodoTextInput.onSave = onSave;
      TodoTextInput.methods.handleBlur.call(TodoTextInput);
      expect(onSave).toHaveBeenCalledWith('hello');
    });

    it('should call onSave and empty text', () => {
      TodoTextInput.input = 'goodbye';
      TodoTextInput.newTodo = true;
      const onSave = jasmine.createSpy('onSave');
      TodoTextInput.onSave = onSave;
      TodoTextInput.methods.handleSubmit.call(TodoTextInput, {keyCode: 13});
      expect(onSave).toHaveBeenCalledWith('goodbye');
      expect(TodoTextInput.input).toEqual('');
    });
  });
});
