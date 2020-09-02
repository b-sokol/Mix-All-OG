const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const glassSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const ingredientSchema = new Schema(
  {
    ingredeient: String,
    measure: String,
  },
  {
    timestamps: true,
  }
);

const cocktailSchema = new Schema(
  {
    name: String,
    ingredeients: ingredientSchema,
    alcoholType: String,
    glassType: glassSchema,
    recipe: String,
    comments: [String],
    photos: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cocktail', cocktailSchema);
