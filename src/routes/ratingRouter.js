const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

router.get('/', ratingController.getAllRatings);
router.post('/:id', ratingController.createRating);

module.exports = router;
