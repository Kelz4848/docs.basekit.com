// Data attribute switch
var toggleState	= function (elem, one, two) {
	var elem	= document.querySelector(elem);
		elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};
	// Mobile navigation toggle selector
	var toggle 	= document.querySelector('.toggle-button');

	// Aside navigation toggle
	toggle.onclick = function (e) {
		toggleState('.nav--docs', 'closed', 'open');
		e.preventDefault();
	};

// Table of contents generator
	// Choose elements from page
	var headlines	= document.querySelectorAll('.main--content h2, .main--content h3'); // Selected titles to use
	var contents	= document.querySelector('#contents'); // Selected element to append contents to

	// Create list
	var contentsList = document.createElement('ol'); // List element (ol or ul)
	contentsList.classList.add('nav-list'); // Class name for list

	// Loop through items
	for (var i = 0; i < headlines.length; i++) {

		// Create list item
		var contentsItem = document.createElement('li'); // List item element
		contentsItem.classList.add('nav-item'); // Class name for list item

		// Append list item to contents list
		contentsList.appendChild(contentsItem);

		// Create link (if not span) to headline
		var link 	 = document.createElement(headlines[i].id ? 'a' : 'span');
		link.textContent = headlines[i].textContent;

		// Add href and value to link
		if (headlines[i].id) {
			link.href = '#' + headlines[i].id;
		}

		// Append link to list item
		contentsItem.appendChild(link);
	}

	// Append list to element on page
	if (contents != null) contents.appendChild(contentsList);

// Position Sticky elements
if(document.getElementById("sticky")){
	PositionSticky([document.getElementById('sticky')]);
}

// Jekyll search
if(document.getElementById("search-field")){

	SimpleJekyllSearch.init({
		searchInput: document.getElementById('search-field'),
		resultsContainer: document.getElementById('search-results'),
		dataSource: "/search.json",
		searchResultTemplate: "<li class='list-item'><a href='{url}' title='{title}'>{title}</a></li>",
		fuzzy: true
	})

	// Disable enter key submission on search form
	document.getElementById('search-field').addEventListener('keypress', function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	});

}

// Zero Clipboard

//create client
var clip = new ZeroClipboard.Client();
//event
clip.addEventListener('mousedown',function() {
	clip.setText(document.querySelectorAll('.highlight').value);
});
clip.addEventListener('complete',function(client,text) {
	alert('copied: ' + text);
});
//glue it to the button
clip.glue('copy');