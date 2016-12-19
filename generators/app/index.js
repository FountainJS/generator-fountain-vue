'use strict';

const fountain = require('fountain-generator');
const version = require('../../package.json').version;

module.exports = fountain.Base.extend({
  prompting: {
    fountain() {
      this.options.framework = 'vue';
      this.options.js = 'babel';
      this.options.modules = 'webpack';
      return this.fountainPrompting();
    },

    sample() {
      this.option('sample', {type: Boolean, required: false});

      const prompts = [{
        when: !this.options.sample,
        type: 'list',
        name: 'sample',
        message: 'Do you want a sample app?',
        choices: [
          {name: 'A working landing page', value: 'techs'},
          {name: 'Just a Hello World', value: 'hello'},
          {name: 'TodoMVC', value: 'todoMVC'}
        ]
      }, {
        when: !this.options.router,
        type: 'list',
        name: 'router',
        message: 'Would you like a router?',
        choices: [
          {name: 'Vue Router 2', value: 'router'},
          {name: 'None', value: 'none'}
        ]
      }];

      return this.prompt(prompts).then(props => {
        Object.assign(this.props, props);
      });
    }
  },

  configuring() {
    this.config.set('version', version);
    this.config.set('props', this.props);
    this.mergeJson('package.json', {
      dependencies: {
        vue: '^2.0.1'
      }
    });
    if (this.props.router === 'router') {
      this.mergeJson('package.json', {
        dependencies: {
          'vue-router': '^2.0.0'
        }
      });
    }
  },

  composing() {
    const options = {
      framework: this.props.framework,
      modules: this.props.modules,
      js: this.props.js,
      ci: this.props.ci,
      css: this.props.css,
      router: this.props.router,
      sample: this.props.sample,
      skipInstall: this.props.skipInstall,
      skipCache: this.props.skipCache
    };

    this.composeWith(require.resolve(`../${this.props.sample}`), options);
    this.composeWith(require.resolve('generator-fountain-gulp/generators/app'), options);
  },

  writing() {
    this.copyTemplate('src/index.html', 'src/index.html', {router: this.props.router});
  }
});
