var divr = '<div class="request">';
var input;
var mes = document.getElementById('request');
var friends = document.getElementById('FriendsList');
var friendsWindow = document.getElementById('friendView');
var chatWin = document.getElementsByClassName('containerChat')[0];

function hamburgler(x){
    x.classList.toggle("change");
    var dropdown = document.getElementById("myDropdown");
	//toggle showing dropdown
  	dropdown.classList.toggle("show");
}

function pageContentsOffset(){
		window_height = $(window).height();
		navOffset = document.defaultView.getComputedStyle(document.getElementById('navbar-top'), "").getPropertyValue("height");
		dropdown = document.getElementById('myDropdown');
		//sizing
		if(dropdown != null){
			dropdown.style.height = (window_height - parseInt(navOffset)) + "px";
	    	dropdown.style.top = navOffset;
		}
	    document.getElementById('map').style.top = navOffset;
	    //chatWin.style.top = 
	    chatWin.style.top = window_height - (.42*window_height)+ "px";
	    friendsWindow.style.top = window_height - (.055*window_height)+ "px"
	    //document.getElementsByClassName('bodyBack')[0].style.paddingTop = navOffset;
}

function friendsToggle(){
	displayToggle('FriendsList');
	friends.style.height = "10vh";
	if (friends == null)
		friendsWindow.style.top = window_height - (.05*window_height)+ "px";
	else if(friends.style.display  == "none")
		friendsWindow.style.top = window_height - (.05*window_height)+ "px";
	else (friendsWindow.style.top = window_height - (.25*window_height)+ "px");
}

function resizeElements(){
	pageContentsOffset();
}

function displayToggle(item){
	item = document.getElementById(item);
	console.log(item);
	if(item.style.display == "none")
		item.style.display = "table";
	else
		item.style.display = "none"
}

function chatWindow(item){
	console.log(item);
	document.getElementById('chatTitle').innerHTML = item;
	document.getElementById('theChat').style.display = "block";
}

function closeChat(){
		document.getElementById('theChat').style.display = "none";
}

function printMessage(){
	input = document.getElementById("mesbox").value;
	mes.innerHTML = divr + input + '</div>';
}
pageContentsOffset();

$(document).keypress(function(e) {
  	if (e.which == 13) {
  		printMessage();
  		$(document).find('#chatBox').append(mes);
  		document.getElementById('mesbox').value = "";
	}
});

function profileClick(){
  $( "#profForm" ).submit();
}

function dropFriends(){
	document.getElementById('FriendsSide');
}

function e1(){
	var img = '<image src="https://s3-media1.fl.yelpcdn.com/bphoto/2tk6EhYQSqOwaIqbWyEcag/o.jpg" width = "90%" style = "left: 10%">'
	document.getElementById('myDropdown').innerHTML = img;
}

displayToggle('FriendsList');