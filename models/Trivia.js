const mongoose = require('mongoose');

const TriviaSchema = new mongoose.Schema({
  itemid: {
    type: String,
    required: [true, 'Please add itemid'],
  },
  question: {
    type: String,
    required: [true, 'Please add a question'],
    unique: true,
  },
  answer: {
    type: String,
    required: [true, 'Please add an answer'],
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'General',
      'Geography',
      'Sports & Leisure',
      'Music',
      'History & Holidays',
      'Food & Drink',
      'Toys & Games',
      'Science & Nature',
      'People & Places',
      'Language',
      'Mathematics & Geometry',
      'Entertainment',
      'Kids',
      'Religion & Mythology',
      'Art & Literature',
      'Tech & Video Games',
      'Mathematics',
    ],
  },
  seenStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Trivia', TriviaSchema);
