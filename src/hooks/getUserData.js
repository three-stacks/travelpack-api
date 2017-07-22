module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const newUser = hook.data.username;
    console.log(`new user is ${newUser}`);
    hook.app.service('users').find(username = newUser).then(val => {
      console.log(val, 'user data');
    });

    // console.log(hook, 'in change');    
    return Promise.resolve(hook);
  };
};
