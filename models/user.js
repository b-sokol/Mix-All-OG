const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    favorites: [{type: Schema.Types.ObjectId, ref: 'Cocktail' }],
    // comments: [commentsSchema],
    avatar: String,
    googleId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);