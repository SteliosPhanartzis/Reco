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

function displayToggle(item){
	item = document.getElementById(item);
	console.log(item);
	if(item.style.display == "none")
		item.style.display = "flex";
	else
		item.style.display = "none"
}

pageContentsOffset();

//given address, find location of data using fully associative, direct, and set associative
//getting off final: cache & cache management, study this
//getting off final: pipeline hazards (structural hazards[1 ALU to handle all computations, so added adders]
//[More significant problem: solved data usage problem, used a mux to hang on to value]
//[Phase 1:Always fetching instruction Phase 4: always doing something, so split up cache to level 1 i and level 1 d]
//, data hazards[getting ALU result, pass it on but also hold on to data so if while decoding, previous result is
//needed, still have it][change the order, do all loads up front to preload data, etc.],
//control hazard(caused by branch statements)[force pick a route and go there instead of waiting for loop, at worst,
//it's like we waited for the answer. Now systems analyze code to predict compilation for code])