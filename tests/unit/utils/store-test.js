import Store from 'ember-initials/utils/store';
import { module, test } from 'qunit';

module('Unit | Store | Ember Initials', function(hooks) {
  hooks.beforeEach(function() {
    this.subject = new Store();
  });

  test('it exists', function(assert) {
    const store = this.subject;

    assert.ok(store);
  });

  test('getItem', function(assert) {
    const store = this.subject;

    const properties = { width: 100, height: 100, initials: 'SC', initialsColor: 'red' };

    assert.ok(store.getItem(properties));
    assert.equal(store.length, 1);

    const newProperties = { width: 100, height: 100, initials: 'SC', initialsColor: 'red' };

    assert.ok(store.getItem(newProperties));
    assert.equal(store.length, 1);
  });
});
