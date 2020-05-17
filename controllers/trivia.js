const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Trivia = require('../models/Trivia');

// @desc     Get all trivia
// @route    GET /api/v1/trivia
// @access   Public
exports.getAllTrivia = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
