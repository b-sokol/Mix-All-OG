const router = require('express').Router();
const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', isLoggedIn, cocktailsCtrl.index);
router.get('/new', isLoggedIn, cocktailsCtrl.new);
router.get('/:id', cocktailsCtrl.show);
router.post('/', isLoggedIn, cocktailsCtrl.create);
router.get('/:id/edit', isLoggedIn, cocktailsCtrl.edit);
router.delete('/:id', isLoggedIn, cocktailsCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
