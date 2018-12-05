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
	    //document.getElementsByClassName('bodyBack')[0].style.paddingTop = navOffset;
}

function resizeElements(){
	pageContentsOffset();
}
pageContentsOffset();