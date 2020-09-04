const Cocktail = require('../models/cocktail');
const User = require('../models/user');

module.exports = {
  index,
  show,
  new: newCocktail,
  create,
  edit,
  delete: deleteCocktail,
  update,
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
  req.body.ingredients = req.body.ingredients.replace(/\s*,\s*/g, ',');
  if (req.body.ingredients)
    req.body.ingredients = req.body.ingredients.split(',');
  req.body.measurements = req.body.measurements.replace(/\s*,\s*/g, ',');
  if (req.body.measurements)
    req.body.measurements = req.body.measurements.split(',');
  const cocktail = new Cocktail(req.body);
  cocktail.createdBy = req.user._id;
  cocktail.save((err) => {
    if (err)
      return res.render('cocktails/new', {
        title: 'Something went wrong, please try again',
      });
    User.findById(req.user._id, (err, user) => {
      user.myCocktails.push(cocktail._id);
      user.save((err) => {
        res.redirect(`/cocktails/${cocktail._id}`);
      });
    });
  });
}

function update(req, res) {
  Cocktail.findOne({ _id: req.params.id }, (err, cocktail) => {
    req.body.ingredients = req.body.ingredients.replace(/\s*,\s*/g, ',');
    if (req.body.ingredients)
      req.body.ingredients = req.body.ingredients.split(',');
    req.body.measurements = req.body.measurements.replace(/\s*,\s*/g, ',');
    if (req.body.measurements)
      req.body.measurements = req.body.measurements.split(',');
    if (req.body.name) cocktail.name = req.body.name;
    if (req.body.glassType) cocktail.glassType = req.body.glassType;
    if (req.body.ingredeients) cocktail.ingredeients = req.body.ingredeients;
    if (req.body.measurements) cocktail.measurements = req.body.measurements;
    if (req.body.instructions) cocktail.instructions = req.body.instructions;
    if (req.body.photo) cocktail.photo = req.body.photo;
    cocktail.save((err) => {
      res.redirect(`/cocktails/${cocktail._id}`);
    });
  });
}

function edit(req, res) {
  Cocktail.findById(req.params.id, (err, cocktail) => {
    if (!cocktail.createdBy.equals(req.user._id))
      return res.redirect('/cocktails');
    res.render('cocktails/edit', { title: `edit ${cocktail.name}`, cocktail });
  });
}

function deleteCocktail(req, res) {
  Cocktail.findByIdAndDelete(req.params.id, (err) => {
    res.redirect(`/users/${req.user._id}`);
  });
}
