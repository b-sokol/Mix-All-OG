const router = require('express').Router();
const commentsCtrl = require('../controllers/comments');

router.post('/cocktails/:id/comments', isLoggedIn, commentsCtrl.create);
router.put('/comments/:id', isLoggedIn, commentsCtrl.update);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
