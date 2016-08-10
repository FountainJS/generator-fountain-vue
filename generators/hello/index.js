const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing: {
    src() {
      const src = [
        'src/index.css',
        'src/index.js',
        'src/app/Hello.vue',
        'src/app/Hello.spec.js'
      ];
      src.map(file => this.copyTemplate(file, file));
    }
  }
});
