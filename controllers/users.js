const User = require('../models/user');
const Cocktail = require('../models/cocktail');

module.exports = {
  index,
  show,
};

function index(req, res, next) {
  res.render('users/index', { title: 'Welcome to Mix-All-OG' });
}

function show(req, res, next) {
  User.findById(req.user.id, (err, user) => {
    Cocktail.find({ createdBy: req.user._id }, (err, cocktails) => {
      res.render('users/show', {
        title: `${user.name}'s Home`,
        user,
        cocktails,
      });
    });
  });
}
