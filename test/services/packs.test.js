const assert = require('assert');
const app = require('../../src/app');

describe('\'packs\' service', () => {
  it('registered the service', () => {
    const service = app.service('packs');

    assert.ok(service, 'Registered the service');
  });
});
