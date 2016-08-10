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

test('Set framework and call this.fountainPrompting', t => {
  context.fountainPrompting = () => {};
  const spy = chai.spy.on(context, 'fountainPrompting');
  TestUtils.call(context, 'prompting.fountain');
  t.is(context.options.framework, 'vue');
  expect(spy).to.have.been.called.once();
});
