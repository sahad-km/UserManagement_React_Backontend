const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/user/registerController');

// router.get('/',registerController.registerLoad);
router.post('/insert',registerController.insertDetails);

module.exports = router;