import Footer from './Footer.vue';

describe('Footer', () => {
  it('should have correct props', () => {
    expect(Footer.props).toEqual(['activeCount', 'completedCount', 'selectedFilter', 'onShow']);
  });

  it('should return filterTitles and filters', () => {
    expect(Object.keys(Footer.data())).toEqual(['filterTitles', 'filters']);
  });

  describe('methods', () => {
    it('should call this.clearCompleted', () => {
      const clearCompleted = jasmine.createSpy('clearCompleted');
      Footer.clearCompleted = clearCompleted;
      Footer.methods.handleClear.call(Footer);
      expect(clearCompleted).toHaveBeenCalled();
    });
  });
});
