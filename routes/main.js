var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var prof = "<img class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" src=\"/images/profileIcon.png\" style=\"width: 40px;\"/>";
 	if(req.query.user != null || req.query.user != '')
 		res.render('index',{loginField:prof});
 	else
 		console.log(res);
});

module.exports = router;
