var divr = '<div class="request">';
var input;
var mes = document.getElementById('request');

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
		dropdown.style.height = (window_height - parseInt(navOffset)) + "px";
	    dropdown.style.top = navOffset;
	    document.getElementById('map').style.paddingTop = navOffset;
	    var chatWin = document.getElementsByClassName('containerChat')[0];
	    //chatWin.style.top = 
	    chatWin.style.top = window_height - (.42*window_height)+ "px";
	    //document.getElementsByClassName('bodyBack')[0].style.paddingTop = navOffset;
}

function resizeElements(){
	pageContentsOffset();
}

function displayToggle(item){
	item = document.getElementById(item);
	console.log(item);
	if(item.style.display == "none")
		item.style.display = "flex";
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
	}
});