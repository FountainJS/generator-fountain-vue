import MainSection from './MainSection.vue';

describe('MainSection', () => {
  it('should have correct props', () => {
    expect(MainSection.props).toEqual(['filter']);
  });

  describe('computed properties', () => {
    beforeEach(() => {
      MainSection.state = {
        todos: [{text: 'Use Redux', completed: false, id: 0}]
      };
    });

    it('should return true', () => {
      MainSection.completedCount = 1;
      MainSection.todos = MainSection.state.todos;
      expect(MainSection.computed.checked.call(MainSection)).toEqual(true);
    });

    it('should return 0', () => {
      MainSection.todos = MainSection.state.todos;
      expect(MainSection.computed.completedCount.call(MainSection)).toEqual(0);
    });

    it('should return 1', () => {
      MainSection.todos = MainSection.state.todos;
      MainSection.completedCount = 0;
      expect(MainSection.computed.activeCount.call(MainSection)).toEqual(1);
    });

    it(`should return 'show_all'`, () => {
      MainSection.mainFilter = 'show_all';
      expect(MainSection.computed.selectedFilter.call(MainSection).type).toEqual('show_all');
    });
  });

  describe('methods', () => {
    it('should call actions.completeAll', () => {
      const completeAll = jasmine.createSpy('completeAll');
      MainSection.completeAll = completeAll;
      MainSection.methods.handleCompleteAll.call(MainSection);
      expect(completeAll).toHaveBeenCalled();
    });

    it('should set this.filter', () => {
      MainSection.methods.handleShow.call(MainSection, 'show_completed');
      expect(MainSection.mainFilter).toEqual('show_completed');
    });
  });
});
