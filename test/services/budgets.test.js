const assert = require('assert');
const app = require('../../src/app');

describe('\'budgets\' service', () => {
  it('registered the service', () => {
    const service = app.service('budgets');

    assert.ok(service, 'Registered the service');
  });
});
