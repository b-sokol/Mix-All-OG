const router = require('express').Router();
const cocktailCtrl = require('../controllers/cocktails');


router.get('/', cocktailCtrl.index);
// router.get('/:id', cocktailCtrl.show);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;