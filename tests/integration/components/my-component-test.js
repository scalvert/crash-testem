import QUnit, { module, test } from 'qunit';
import { run } from '@ember/runloop';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it takes a long time', async function(assert) {
    let timeout = QUnit.urlParams.timeout || 0;

    run.later(() => {
      assert.ok(true, 'test is donezorz');
    }, timeout);
  });
});
