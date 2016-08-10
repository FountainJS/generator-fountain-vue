const test = require('ava');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

test.before(() => {
  context = TestUtils.mock('app');
  require('../../generators/app/index');
  process.chdir('../../');
});

test.beforeEach(() => {
  context.copyTemplate['src/index.html'] = null;
});

test(`Write 'index.html'`, t => {
  TestUtils.call(context, 'writing');
  t.true(context.copyTemplate['src/index.html'].length > 0);
});
