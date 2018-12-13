var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var log = "<div class=\"ml-auto mr-auto navbar-brand\" id = \"loginTrigger\" onclick = \"displayToggle('loginForm')\">Login</div>"
  res.render('index',{loginField:log,chat:""});
});

module.exports = router;
