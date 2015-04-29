// Copyright (c) 2015 Wild Style Chrome Extensions

// Called when the user browses to specific pinterest page while not logged in.

alert("1");

var one = document.getElementsByClassName("Module UnauthBanner");
if(one && one[0]){   
	one[0].style.display="none";
};

alert("2");

var two = document.getElementsByClassName("inspiredSearchContentWrapper  ");
if(two && two[0]){   
	two[0].style.display="none";
}; 
