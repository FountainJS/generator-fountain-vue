const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

test.before(() => {
  context = TestUtils.mock('app');
  require('../../generators/app/index');
});

test.beforeEach(() => {
  context.mergeJson['package.json'] = {};
});

test('Call this.config.set twice', () => {
  context.config = {
    set: () => {}
  };
  const spy = chai.spy.on(context.config, 'set');
  TestUtils.call(context, 'configuring');
  expect(spy).to.have.been.called.twice();
  expect(spy).to.have.been.called.with('version');
  expect(spy).to.have.been.called.with('props');
});

test(`Add 'vue' and 'vue-router' to package.json dependencies`, t => {
  TestUtils.call(context, 'configuring', {router: 'router'});
  t.is(context.mergeJson['package.json'].dependencies.vue, '^2.0.0-rc.8');
  t.is(context.mergeJson['package.json'].dependencies['vue-router'], '^2.0.0-rc.5');
});

test(`Add 'vue' to package.json dependencies`, t => {
  TestUtils.call(context, 'configuring', {router: 'none'});
  t.is(context.mergeJson['package.json'].dependencies.vue, '^2.0.0-rc.8');
  t.is(context.mergeJson['package.json'].dependencies['vue-router'], undefined);
});
