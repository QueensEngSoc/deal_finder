// Gets search bar value
function getSBValue (event) {
	let value = document.querySelector("#searchBar input").value;
	console.log(value)
	return value;
} 


// adds event listeners to proper page elements when page loads
window.onload = function addListeners () {
	// For detail panels
	let buttons = document.querySelectorAll("button.detailButton");
	for(let i=0; i<buttons.length;i++) {
		buttons[i].addEventListener('click',function () { // function that runs when thing is; // Make revealing less abrupt (animation?)
			let details = document.querySelectorAll("div .detailPanel");
			details[i].classList.remove("inactive");
			let merchants = document.querySelectorAll("div .merchant");
			merchants[i].classList.add("inactive");
		});
	}

	// for search button
	let searchButton = document.querySelector("#searchButton");
	searchButton.addEventListener('click', getSBValue);
}


// Close the dropdown if the user clicks outside of it
// Figure out how to make it show the merchant again
window.onclick = function(event) {
	if (!event.target.matches('.detailButton')) {

	    let dropdowns = document.getElementsByClassName("detailPanel");
	  	for (let i = 0; i < dropdowns.length; i++) {
	   		if (!dropdowns[i].classList.contains('inactive')) {
		    	dropdowns[i].classList.add('inactive');
		    }
		}
		let merchants = document.getElementsByClassName("merchant");
		for (let i = 0; i < merchants.length; i++) {
	   		if (merchants[i].classList.contains('inactive')) {
		    	merchants[i].classList.remove('inactive');
		    }
		}
	}
}

