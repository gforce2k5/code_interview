const Notification = require('../../models/notification/Notification');

module.exports = {
  async createNotification(req, res) {
    const {accountId, name, color} = req.body;
    const notification = new Notification({accountId, name, color});
    await notification.save();
    res.send({message: 'sucess'});
  }
};