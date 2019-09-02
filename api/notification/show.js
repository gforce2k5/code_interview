const Notification = require('../../models/notification/Notification');

module.exports = {
  async showNotifications(req, res) {
    const {accountId} = req.query;
    const notifications = await Notification.find({accountId});
    res.send(notifications);
  }
}