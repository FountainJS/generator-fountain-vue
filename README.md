<p align="center">
  <a href="http://fountainjs.io/">
    <img alt="FountainJS" src="http://fountainjs.io/assets/imgs/fountain.png" width="200">
  </a>
</p>

[![Build Status](https://travis-ci.org/FountainJS/generator-fountain-vue.svg?branch=master)](https://travis-ci.org/FountainJS/generator-fountain-vue)
[![codecov](https://codecov.io/gh/FountainJS/generator-fountain-vue/branch/master/graph/badge.svg)](https://codecov.io/gh/FountainJS/generator-fountain-vue)

# Fountain Vue.js 2 Generator

[![Vue 2](http://fountainjs.io/assets/imgs/vue.png)](https://vuejs.org/)

> This Yeoman generator allows you to start an Vue.js web app with the best Developer Experience out of the box!

> No matter what framework or module management you want to use, we got you covered with a cutting edge working configuration.

> We use [Gulp 4](http://gulpjs.com/) as a task manager but we'll ask you questions about:
- Modules management: Webpack
- JS preprocessor: Babel
- CSS preprocessor: Sass, Stylus, Less, none

This generator is a sub-generator of the the Yeoman Fountain generator for webapps [generator-fountain-webapp](https://github.com/FountainJS/generator-fountain-webapp).

## Generator Fountain Vue 2 structure

To take profit of the best of the Yeoman infrastructure, we heavily relies on the composability natures of the generators.

Thereby, each needs of your future application will be addressed by a dedicated Yeoman generator (each will be used depending of the options you selected or not).

More informations in [DESIGN.md](http://fountainjs.io/doc/design).


### Web tooling layer
[![Gulp](http://fountainjs.io/assets/imgs/gulp.png)](https://github.com/FountainJS/generator-fountain-gulp)
[![ESLint](http://fountainjs.io/assets/imgs/eslint.png)](https://github.com/FountainJS/generator-fountain-eslint)
[![BrowserSync](http://fountainjs.io/assets/imgs/browsersync.png)](https://github.com/FountainJS/generator-fountain-browsersync)
[![Karma](http://fountainjs.io/assets/imgs/karma.png)](https://github.com/FountainJS/generator-fountain-karma)

### Module management layer
[![Webpack](http://fountainjs.io/assets/imgs/webpack.png)](https://github.com/FountainJS/generator-fountain-webpack)
[![SystemJS](http://fountainjs.io/assets/imgs/systemjs.png)](https://github.com/FountainJS/generator-fountain-systemjs)
[![Bower](http://fountainjs.io/assets/imgs/bower.png)](https://github.com/FountainJS/generator-fountain-inject)


## Usage

### Requirement Node 4+ && NPM 3+
This generator is targeted to be used with Node >= 4.0.0 and NPM => 3.0.0. You can check your version number with the command
```
node --version && npm --version
```

### Install

##### Install required tools `yo`:
```
npm install -g yo
```

##### Install `generator-fountain-vue`:
```
npm install -g generator-fountain-vue
```


### Run

##### Create a new directory, and go into:
```
mkdir my-new-project && cd my-new-project
```

##### Run `yo fountain-vue`, and select desired technologies:
```
yo fountain-vue
```
#### Use NPM scripts

- `npm run build` to build an optimized version of your application in /dist
- `npm run serve` to launch a browser sync server on your source files
- `npm run serve:dist` to launch a server on your optimized application
- `npm run test` to launch your unit tests with Karma
- `npm run test:auto` to launch your unit tests with Karma in watch mode


#### Or Gulp tasks

If you have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global packages you can use equivalent:

- `gulp` or `gulp build`
- `gulp serve`
- `gulp serve:dist`
- `gulp test`
- `gulp test:auto`

**If you don't have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global, you should have this error:**
> /usr/local/lib/node_modules/gulp/bin/gulp.js:121
    gulpInst.start.apply(gulpInst, toRun);
TypeError: Cannot read property 'apply' of undefined

### Sub-generators

Few sub-generators are available. You can see the full list by running `yo --generators`.  
Each generator has 2 options:
- You can set the name of the generated item with `--name`
- You can set the path of the generated item with `--dir`

**Example:**

```
yo fountain-vue:component --name myComponent --dir components/game
```

### [Start development](http://fountainjs.io/doc/usage/#use-npm-scripts)


## [Changelog](https://github.com/FountainJS/generator-fountain-vue/releases)


## [Contributing](http://fountainjs.io/doc/contributing)
