const express = require('express');
const router = express.Router();
const dashboardController = require('../../controllers/user/dashboardController');
const auth = require('../../Middleware/jwtAuth')

router.post('/',auth.authCheck,dashboardController.dashboardLoad);
router.post('/uploadImg/:id', dashboardController.uploadImg);
module.exports = router;