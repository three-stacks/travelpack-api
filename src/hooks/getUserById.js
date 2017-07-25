module.exports = function () { 
  return function (hook) {
    const id = hook.data.userId;
    hook.app.service('users').get(id).then(user => {
      console.log(user, 'user data'),
      hook.result.result = user, 
    });
    return Promise.resolve(hook);
  };
};
