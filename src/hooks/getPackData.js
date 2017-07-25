module.exports = function (options = {}) { 
  return function (hook) {
    const packID = hook.result.data[0].packId;
    return hook.app.service('packs').find({ query: { id: packID } }).then(packData => {
      console.log(packData, 'pack data');
      hook.result.data = packData.data;
      return hook;
    });
  };
};
