const express = require('express');
const router = express.Router();
const WriteController = require('./../controllers/WriteController');
const authentication = require('./../middlewares/authentication');

router.get('/', authentication, WriteController.getWrite);

router.post('/', authentication, WriteController.postWrite);

module.exports = router;
