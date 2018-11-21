// Make revealing less abrupt (animation?)
	function showDetails(id, merchant) {
		// Reveals detail panel
   		document.getElementById(id).classList.toggle("show");
   		
   		// Hides merchant name - will be rewritten in detail panel w/ js
   		var x = document.getElementById(merchant);
	    if (x.style.display === "none") {
	        x.style.display = "block";
	    } else {
	        x.style.display = "none";
	    }
   	}


	// Close the dropdown if the user clicks outside of it
	// Figure out how to make it show the merchant again
	window.onclick = function(event) {
		if (!event.target.matches('.detailButton')) {

	    	var dropdowns = document.getElementsByClassName("detailPanel");
	    	var i;
		    for (i = 0; i < dropdowns.length; i++) {
		   		var openDropdown = dropdowns[i];
		    	if (openDropdown.classList.contains('show')) {
		    		openDropdown.classList.remove('show');
		    	}
			}
		}
	}