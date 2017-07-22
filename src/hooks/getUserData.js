module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const newUser = hook.data.username;
    console.log(`new user is ${newUser}`);
    hook.app.service('users').find().then((val) => {
      for (var i = 0; i < val.data.length; i++) {
        if (val.data[i].username === newUser) {
          console.log(val.data[i].id)
          hook.data.userId = val.data[i].id;
        }
      }
    })
    // console.log(userId);
    return Promise.resolve(hook);
  };
};
