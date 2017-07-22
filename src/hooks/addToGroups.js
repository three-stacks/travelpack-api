module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const currUserId = hook.data.userId.__zone_symbol__value;
    const currPackId = hook.result.id;
    console.log(`${currUserId} and ${currPackId} have been inserted into the group table`);
    
    hook.app.service('groups').create({
      userId: currUserId,
      packId: currPackId,
    });
    return Promise.resolve(hook);
  };
};
