let userCtrl = require('../controllers/user');
const express = require('express')

let router         = express.Router();
router.route('/create/user').post(userCtrl.createUser())

module.exports = router