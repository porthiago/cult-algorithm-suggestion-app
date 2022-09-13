const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.post('/', contentController.createContent);
router.get('/', contentController.getAllContents);

module.exports = router;
