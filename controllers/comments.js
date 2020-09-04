const Cocktail = require('../models/cocktail');

module.exports = {
  create,
  update,
};

function create(req, res) {
  Cocktail.findById(req.params.id, (err, cocktail) => {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    cocktail.comments.push(req.body);
    cocktail.save((err) => {
      res.redirect(`/cocktails/${cocktail._id}`);
    });
  });
}

function update(req, res) {
  Cocktail.findOne({ 'comments._id': req.params.id }, (err, cocktail) => {
    const commentSubdoc = cocktail.comments.id(req.params.id);
    if (!commentSubdoc.userId.equals(req.user._id))
      return res.redirect(`/cocktails/${cocktail._id}`);
    commentSubdoc.text = req.body.text;
    cocktail.save((err) => {
      res.redirect(`/cocktails/${cocktail._id}`);
    });
  });
}
