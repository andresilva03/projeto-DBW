const express = require('express');
const router = express.Router();
const contactscontrol = require('../controller/ContactsController');

router.post('/',contactscontrol.ContactsPost);

router.get('/',contactscontrol.ContactsGet);

module.exports = router ; 