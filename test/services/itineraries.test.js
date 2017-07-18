const assert = require('assert');
const app = require('../../src/app');

describe('\'Itineraries\' service', () => {
  it('registered the service', () => {
    const service = app.service('itineraries');

    assert.ok(service, 'Registered the service');
  });
});
