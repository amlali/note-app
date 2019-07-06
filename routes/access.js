let accessCtrl = require('../controllers/access');
const express = require('express')

let router         = express.Router();
router.route('/login').post(accessCtrl.loginWithEmailPassword())

module.exports = router