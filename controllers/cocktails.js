const Cocktail = require('../models/cocktail');
const User = require('../models/user');

module.exports = {
  index,
  show,
  new: newCocktail,
  create,
  edit,
  delete: deleteCocktail,
};

function index(req, res) {
  Cocktail.find({}, (err, cocktails) => {
    res.render('cocktails/index', { title: 'All Cocktails', cocktails });
  });
}

function show(req, res) {
  Cocktail.findById(req.params.id, (err, cocktail) => {
    res.render('cocktails/show', {
      title: `${cocktail.name} Info`,
      cocktail,
    });
  });
}

function newCocktail(req, res) {
  const newCocktail = new Cocktail();
  res.render('cocktails/new', { title: 'New Cocktail' });
}

function create(req, res) {
  const cocktail = new Cocktail(req.body);
  cocktail.createdBy = req.user._id;
  cocktail.save((err) => {
    if (err)
      return res.render('cocktails/new', {
        title: 'Something went wrong, please try again',
      });
    User.findById(req.user._id, (err, user) => {
      user.myCocktails.push(cocktail._id);
      user.save();
      res.redirect(`/cocktails/${cocktail._id}`);
    });
  });
}

function edit(req, res) {
  Cocktail.findById(req.params.id, (err, cocktail) => {
    if (!cocktail.createdBy.equals(req.user._id)) return res.redirect('/cocktails');
    res.render('cocktails/edit', { title: `edit ${cocktail.name}`, cocktail });
  });
}

function deleteCocktail(req, res) {
  Cocktail.findByIdAndDelete(req.params.id, (err) => {
    res.redirect(`/users/${req.user._id}`);
  });
}
