module.exports = function() {
  return function(hook) {
    // console.log(hook, 'hi');
    return Promise.resolve(hook);
  };
};
