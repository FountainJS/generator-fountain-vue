const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  configuring: {
    pkg() {
      this.mergeJson('package.json', {
        dependencies: {
          'vuex': '^2.1.2',
          'todomvc-app-css': '^2.0.6'
        }
      });
    },

    babel() {
      this.mergeJson('.babelrc', {plugins: ['transform-object-rest-spread']});
    }
  },

  writing: {
    src() {
      const src = [
        'src/index.html',
        'src/index.js',

        'src/app/components/Footer.vue',
        'src/app/components/Footer.spec.js',
        'src/app/components/Header.vue',
        'src/app/components/Header.spec.js',
        'src/app/components/MainSection.vue',
        'src/app/components/MainSection.spec.js',
        'src/app/components/TodoItem.vue',
        'src/app/components/TodoItem.spec.js',
        'src/app/components/TodoTextInput.vue',
        'src/app/components/TodoTextInput.spec.js',

        'src/app/constants/ActionTypes.js',
        'src/app/constants/TodoFilters.js',
        'src/app/constants/VisibilityFilters.js',

        'src/app/containers/App.vue',

        'src/app/store/actions.js',
        'src/app/store/index.js',
        'src/app/store/mutations.js',
        'src/app/store/mutations.spec.js'
      ];
      src.map(file => this.copyTemplate(file, file));
    }
  }
});
