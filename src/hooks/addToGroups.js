module.exports = function () {
  return function (hook) {
    const userID = hook.data.userId.__zone_symbol__value;
    const packID = hook.result.id;
    console.log(`${currUserId} and ${currPackId} have been inserted into the group table`);  
    hook.app.service('groups').create({
      userId: userID,
      packId: packID,
    });
    return Promise.resolve(hook);
  };
};
