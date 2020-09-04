const router = require('express').Router();
const userCtrl = require('../controllers/users');

router.get('/', userCtrl.index);
router.get('/:id', isLoggedIn, userCtrl.show);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
