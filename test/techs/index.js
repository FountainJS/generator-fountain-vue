const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

const files = [
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

test.before(() => {
  context = TestUtils.mock('techs');
  require('../../generators/techs/index');
  process.chdir('../../');
});

test(`Add 'vue-resource' to package.json dependencies`, () => {
  TestUtils.call(context, 'configuring');
  expect(context.mergeJson['package.json'].dependencies['vue-resource']).to.equal('^0.9.3');
});

test(`Call this.copyTemplate 14 times`, t => {
  const spy = chai.spy.on(context, 'copyTemplate');
  TestUtils.call(context, 'writing.src', {
    js: 'babel',
    version: require('../../package.json').version,
    date: new Date().toString()
  });
  expect(spy).to.have.been.called.exactly(files.length);
  files.forEach(file => t.true(context.copyTemplate[file].length > 0));
});

test('Call this.prepareTechJson', () => {
  context.prepareTechJson = () => {};
  const spy = chai.spy.on(context, 'prepareTechJson');
  TestUtils.call(context, 'techs');
  expect(spy).to.have.been.called.once();
});
