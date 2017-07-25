const assert = require('assert');
const app = require('../../src/app');

describe('\'fbusers\' service', () => {
  it('registered the service', () => {
    const service = app.service('fbusers');

    assert.ok(service, 'Registered the service');
  });
});
