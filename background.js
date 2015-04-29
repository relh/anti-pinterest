// Copyright (c) 2015 Wild Style Chrome Extensions

// Called for when pinterest updates what it's displaying
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
	document.body.className = "";

	var three = document.getElementsByClassName("Module Modal absoluteCenter show");
	if(three && three[0]){   
		three[0].style.display="none";
	}; 

	alert("worked");
  }
})


/* var button1 = document.getElementById("first_button");
button1.style.display= "none";
var button2 = document.getElementById("second_button");
button2.style.display= "inline"; */

//$(document).bind('touchmove', function(){
//    scroll = true
//})
