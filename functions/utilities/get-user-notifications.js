const GetRefs = require('./get-refs');

module.exports = context => async userId => {
  const notificationsRef = GetRefs(context).userNotifications(userId);

  const snapshot = await notificationsRef.once('value');

  return snapshot.val();
};
