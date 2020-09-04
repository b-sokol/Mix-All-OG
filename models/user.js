const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    googleId: String,
    myCocktails: [{ type: Schema.Types.ObjectId, ref: 'Cocktail' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
