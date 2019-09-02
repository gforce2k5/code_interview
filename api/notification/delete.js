const Notification = require('../../models/notification/Notification');

module.exports = {
  async deleteNotifications(req, res) {
    const {accountId, color} = req.query;
    const result = await Notification.deleteMany({accountId, color});
    if (result.deletedCount == 0) return res.send({error: 'document not found'});
    return res.send(notifixations);
  }
}