const express = require('express');
const router = express.Router();
const logController = require('../../controllers/user/loginController');

router.get('/',logController.loginLoad);
router.post('/login_check',logController.loginCheck);
router.post('/logout',logController.logout);

module.exports = router;