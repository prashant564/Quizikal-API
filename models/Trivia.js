const mongoose = require('mongoose');

const TriviaSchema = new mongoose.Schema({
  itemid: {
    type: String,
    required: [true, 'Please add itemid'],
    unique: true,
  },
  question: {
    type: String,
    required: [true, 'Please add a question'],
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
      'Sports and Leisure',
      'Music',
      'History and Holidays',
      'Food and Drink',
      'Toys and Games',
      'Science and Nature',
      'People and Places',
      'Language',
      'Mathematics and Geometry',
      'Entertainment',
      'Kids',
      'Religion and Mythology',
      'Art and Literature',
      'Tech and Video Games',
      'Mathematics',
    ],
  },
  seenStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Trivia', TriviaSchema);
