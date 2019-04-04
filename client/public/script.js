// Gets search bar value
function getSBValue(event) {
	event.preventDefault();
	let value = document.querySelector(".searchBar").value;
	console.log(value);
	return value;
}

// things that run when loaded
window.onload = function loaded() {
	// tests addDealString
	// addDealString("store", "241", "igm","smallDetails","largeDetails");

	// for search button
	let searchButton = document.querySelector(".searchButton");
	searchButton.addEventListener("click", getSBValue);
	// pulls from database, each item is in array
	// adds elements to the page (loop)
	// for (let i = 0; i < fromDB.length; i ++) {
	// 	addDealString(fromDB[i]);
	// }
};

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches(".detailButton")) {
		let dropdowns = document.getElementsByClassName("detailPanel");
		for (let i = 0; i < dropdowns.length; i++) {
			if (!dropdowns[i].classList.contains("inactive")) {
				dropdowns[i].classList.add("inactive");
			}
		}
		// let merchants = document.getElementsByClassName("merchant");
		// for (let i = 0; i < merchants.length; i++) {
		//   		if (merchants[i].classList.contains('inactive')) {
		//     	merchants[i].classList.remove('inactive');
		//     }
		// }
	}
};

// If details is just a string
function addDealString(merchant, deal, logoSrc, smallDetails, majorDetails) {
	// Div that contains everything
	let totalDiv = document.createElement("div");
	totalDiv.classList.add("row");

	// Picture
	let picDiv = document.createElement("div");
	picDiv.classList.add("col-md-7");
	picDiv.innerHTML =
		'<a href="#"> <img class="img-fluid rounded mb-3 mb-md-0" src=' +
		logoSrc +
		'alt=""> </a>';

	// Details
	let detDiv = document.createElement("div");
	detDiv.classList.add("col-md-5");
	detDiv.innerHTML =
		'<div class="dNameButton"><h3>' +
		merchant +
		"</h3>" +
		'<a class="detailButton btn btn-primary" href="#">View Details</a> </div> <p><strong><em>' +
		deal +
		"</em></strong><br>" +
		smallDetails;

	totalDiv.appendChild(picDiv);
	totalDiv.appendChild(detDiv);
	totalDiv.innerHTML += "<hr>";
	console.log(totalDiv);
	document.querySelectorAll(".container")[1].appendChild(totalDiv);
}

// If details is a map of detail type, then info ie location: rnandom address
function addDealMap(details) {
	// Div that contains everything
	let totalDiv = document.createElement("div");
	totalDiv.classList.add("row");

	// Picture
	let picDiv = document.createElement("div");
	picDiv.classList.add("dealPic col-md-7");
	picDiv.innerHTML =
		'<a href="#"> <img class="img-fluid rounded mb-3 mb-md-0" src=' +
		details.logoSrc +
		'alt=""> </a>';

	// Details
	let detDiv = document.createElement("div");
	detDiv.classList.add("col-md-5");
	detDiv.innerHTML =
		'<div class="dNameButton"><h3>' +
		details.merchant +
		"</h3>" +
		'<a class="detailButton btn btn-primary" href="#">View Details</a> </div> <p><strong><em>' +
		details.deal +
		"</em></strong><br>" +
		details.smallDetails;

	totalDiv.appendChild(picDiv);
	totalDiv.appendChild(detDiv);
	totalDiv.innerHTML += "<hr>";
	console.log(totalDiv);
	document.querySelectorAll(".container")[1].appendChild(totalDiv);
}
