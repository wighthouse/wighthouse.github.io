 
//Get the temp and wind speed from the page. Call the windChill function.
	//Store the result in a variable, and display it on the page.
	function getWindChill() {
	let tempF = parseFloat(document.getElementById("high").innerHTML);
	let speed = parseFloat(document.getElementById("speed").innerHTML);
   

// Calculate the wind chill factor.
   if (tempF <=50 && speed >= 3) {
    let chill =  35.74 + (0.6215*tempF) - (35.75*(speed**0.16)) + (0.4275*tempF*(speed**0.16));
    document.getElementById("chill").innerHTML= chill.toFixed(1)+"&degF";
	}
	else{
	let chillNA = "N/A";
	document.getElementById("chill").innerHTML= "n/a";
	}
		
		
	}	  