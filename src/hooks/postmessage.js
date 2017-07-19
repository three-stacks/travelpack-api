// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    console.log(hook, 'in post message');

    // query: {
    //   url: "somethingr"
    // }
    // return hook.app.service('/photos').find({ url: "somethingr" }).then(result => {
    //   console.log(hook);
    //   console.log(result, "this is the resulllltttt");
    //   return result;
    //   // return hook.result.url
    // });

    // });
    // const user = hook.params.user;
    // const text = hook.data.text;

    // hook.params = {
    //   text,
    //   username: user.username,
    //   avatar: user.avatar,
    // };
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
