var express = require('express');
var router = express.Router();

/* GET book details. */
router.get('/', function(req, res, next) {
  res.render('book.pug');
});

module.exports = router;
