const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    favorites: [cocktailsSchema],
    comments: [commentsSchema],
    photos: [photosSchema],
    avatar: String,
    googleId: String
}, {
    timestamps: true
})
