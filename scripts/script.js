// Gets search bar value
function getSBValue (event) {
	let value = document.querySelector("#searchBar input").value;
	console.log(value)
	return value;
} 


// adds event listeners to proper page elements when page loads
// Since we're not hardcoding
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

	addDealString("iTea", "BOGO", null, "I hope this works");
}


// Close the dropdown if the user clicks outside of it
// Figure out how to make it show the merchant again
window.onclick = function(event) {
	if (!event.target.matches('.detailButton')) {

	    let dropdowns = document.getElementsByClassName("detailPanel");
	    let merchants = document.getElementsByClassName("merchant");
	  	for (let i = 0; i < dropdowns.length; i++) {
	   		if (!dropdowns[i].classList.contains('inactive')) {
		    	dropdowns[i].classList.add('inactive');
		    }
		    if (merchants[i].classList.contains('inactive')) {
		    	merchants[i].classList.remove('inactive');
		    }
		}
			
	}
}

// If details is just a string
function addDealString (merchant, deal, logoSrc, details) {
	
	// Div that contains everything
	let div = document.createElement("div");
	div.classList.add("item");

	// Image chosen
	let img = document.createElement("img");
	img.classList.add("itemImage");
	img.src = logoSrc;
	
	// Inner Div - details
	let innerDiv = document.createElement("div");
	innerDiv.classList.add("itemText");
	innerDiv.innerHTML = "<strong>" + deal + "</strong>";
	innerDiv.innerHTML += "<button class = \"detailButton\">Details</button>";
	innerDiv.innerHTML += "<div class=\"detailPanel inactive\">" + details + "</div>";
	innerDiv.innerHTML += "<p class =\"merchant\">" + merchant +"</p>";
	
	console.log(innerDiv.innerHTML);

	// Adds event listener
	let els = innerDiv.childNodes;
	let button = els[1];
	button.addEventListener('click', function () {
		els[2].classList.remove("inactive");
		els[3].classList.add("inactive");
	});
	
	div.appendChild(img);
	div.appendChild(innerDiv);
	document.querySelector(".content .para").appendChild(div);
}

// If details is a map of detail type, then info ie location: rnandom address
function addDealMap(details) {

	// Div that contains everything
	let div = document.createElement("div");
	div.classList.add("item");

	// Image chosen
	let img = document.createElement("img");
	img.classList.add("itemImage");
	img.src = details.logoSrc;
	
	// Inner Div - details
	let innerDiv = document.createElement("div");
	innerDiv.classList.add("itemText");
	innerDiv.innerHTML = "<strong>" + details.deal + "</strong>";
	innerDiv.innerHTML += "<button class = \"detailButton\">Details</button>";
	innerDiv.innerHTML += "<div class=\"detailPanel inactive\">" + details.details + "</div>";
	innerDiv.innerHTML += "<p class =\"merchant\">" + details.merchant +"</p>";
	
	console.log(innerDiv.innerHTML);

	// Adds event listener
	let els = innerDiv.childNodes;
	let button = els[1];
	button.addEventListener('click', function () {
		els[2].classList.remove("inactive");
		els[3].classList.add("inactive");
	});
	
	div.appendChild(img);
	div.appendChild(innerDiv);
	document.querySelector(".content .para").appendChild(div);
}


