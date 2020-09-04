const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
  },
  {
    timestamps: true,
  }
);

const cocktailSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    glassType: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    measurements: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    photo: String,
    comments: [commentSchema],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    // usersFavorited: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cocktail', cocktailSchema);
