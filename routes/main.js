var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var prof = "<form action='/p' id='profForm'><img id=\"profButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" src=\"/images/profileIcon.png\" style=\"width: 40px;\" onclick=\"profileClick()\"/></form>";
 	var chat = '<div class="containerChat" id = "theChat">' +
    '<h4 class="display-4 text-center"> <span id = "chatTitle"> User </span><input type = "button" class = "btn" value = "X" style = "float: right;" onclick = "closeChat()"></span></h4>' + 
    '<div class="chatBox" id="chatBox">' +
        '<div class="response"><strong>Nelson:</strong> <br>Are we going to present?</div>' + 
        '<div id="request"></div>' +
    '</div>' +
    '<input class="w3-input" id="mesbox" type="text" placeholder="input here...">' +
'</div>' +
'<div class = "containerChat" id = "friendView" onclick = "friendsToggle()">' +
    '<h2>Friends</h2>' +
    '<ul id = "FriendsList">' +
        '<li><span onclick = "chatWindow(this.innerHTML)">Nelson Zeas</span><div class = "online"></div></li>' +
        '<li><span onclick = "chatWindow(this.innerHTML)">Edgardo Molina</span><div class = "offline"></div></li>' +
        '<li><span onclick = "chatWindow(this.innerHTML)">Theodore Brown</span><div class = "offline"></div></li>' +
    '</ul>' +
'</div>';
 	res.render('index',{loginField:prof, chat: chat});
});

module.exports = router;
