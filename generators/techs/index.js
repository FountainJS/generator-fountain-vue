const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  configuring() {
    this.mergeJson('package.json', {
      dependencies: {
        'vue-resource': '^1.2.0'
      }
    });
  },

  writing: {
    src() {
      const src = [
        'src/index.css',
        'src/index.js',

        'src/app/techs/Tech.vue',
        'src/app/techs/Tech.spec.js',
        'src/app/techs/Techs.vue',
        'src/app/techs/Techs.spec.js',
        'src/app/Footer.vue',
        'src/app/Footer.spec.js',
        'src/app/Header.vue',
        'src/app/Header.spec.js',
        'src/app/Main.vue',
        'src/app/Main.spec.js',
        'src/app/Title.vue',
        'src/app/Title.spec.js'
      ];
      src.map(file => this.copyTemplate(file, file));
    }
  },

  techs() {
    this.prepareTechJson();
  }
});
