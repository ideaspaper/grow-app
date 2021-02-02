const express = require('express');
const router = express.Router();
const WriteController = require('./../controllers/WriteController');
const authentication = require('./../middlewares/authentication');

router.get('/', authentication, WriteController.getWrite);
router.get('/:id/edit', authentication, WriteController.getEditWrite);

router.post('/', authentication, WriteController.postWrite);
router.post('/:id/edit', authentication, WriteController.postEditWrite);

module.exports = router;
