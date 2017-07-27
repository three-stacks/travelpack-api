module.exports = function() {
  return function(hook) {
    if (hook.data.avatar === ''){
      hook.data.avatar = 'https://avatars3.githubusercontent.com/u/30052362?v=4&s=200';
    }
    return Promise.resolve(hook);
  };
};
