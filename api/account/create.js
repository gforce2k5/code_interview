const express = require('express');
const Account = require('../../models/account/Account');

const router = express.Router();

router.post('/', async (req, res) => {
    const {email, name, age} = req.body;
    const user = await Account.findOne({email});
    if (user) return res.send({error: "email already exists"});
    const account = new Account({email, name, age});
    await account.save();
    return res.send({message: 'success'});
});

module.exports = router;