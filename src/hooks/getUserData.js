module.exports = function (options={}) { 
  return function (hook) {
    if (!hook.data.userId) {
      const newUser = hook.data.username;
      return hook.app.service('users').find({ query: { username: newUser } }).then((val) =>{   
        console.log(`new user ${val.data[0].username} is added to the ${hook.data.packId} pack `);
        hook.data.userId = val.data[0].id;
        return hook;
      });
    }
  };
};
