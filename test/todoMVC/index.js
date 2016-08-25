const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

const files = [
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

test.before(() => {
  context = TestUtils.mock('todoMVC');
  require('../../generators/todoMVC/index');
  process.chdir('../../');
});

test(`Add 'todomvc-app-css' to package.json dependencies`, () => {
  TestUtils.call(context, 'configuring.pkg');
  expect(context.mergeJson['package.json'].dependencies.vuex).to.equal('^2.0.0-rc.4');
  expect(context.mergeJson['package.json'].dependencies['todomvc-app-css']).to.equal('^2.0.4');
});

test(`Add 'transform-object-rest-spread' to babelrc`, () => {
  TestUtils.call(context, 'configuring.babel');
  expect(context.mergeJson['.babelrc'].env.production.plugins).to.deep.equal(['transform-object-rest-spread']);
});

test(`Call this.copyTemplate 20 times`, t => {
  const spy = chai.spy.on(context, 'copyTemplate');
  TestUtils.call(context, 'writing.src', {
    js: 'babel',
    version: require('../../package.json').version,
    date: new Date().toString()
  });
  expect(spy).to.have.been.called.exactly(files.length);
  files.forEach(file => t.true(context.copyTemplate[file].length > 0));
});
