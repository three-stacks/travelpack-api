// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const feathers = require('feathers');

const services = require('../services');

const app = feathers();

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {

    console.log(hook);
    return Promise.resolve(hook);
  };
};
