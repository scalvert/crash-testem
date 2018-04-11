import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navigating-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Template block usage:
    await render(hbs`
      {{#navigating-component}}
        <a href="http://www.example.com" class="navigator">Navigator</a>
      {{/navigating-component}}
    `);

    await click('.navigator');

    assert.ok(true);
  });
});
