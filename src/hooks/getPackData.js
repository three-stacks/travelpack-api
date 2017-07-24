module.exports = function (options = {}) { 
  return function (hook) {
    console.log(hook, 'in get pack data and user data ');
    const packID = hook.result.data[0].packId;
    return hook.app.service('packs').find({ query: { id: packID } }).then(packData => {
      console.log(packData, 'pack data');
      // console.log(hook.result.data, 'returned data');
      hook.result.data = packData.data;
      return hook;
    });
  };
};
