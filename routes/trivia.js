const express = require('express');

const router = express.Router();

const { getAllTrivia } = require('../controllers/trivia');

const Trivia = require('../models/Trivia');
const advancedResults = require('../middleware/advancedResults');

router.route('/').get(getAllTrivia);

module.exports = router;
