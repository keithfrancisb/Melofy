/* global $ */

// popup function that removes "hidden" class from popup while
// adding hidePopUp listener to document and cleaning up out-of-date listener
const revealPopUp = (event) => {
  event.stopPropagation(); // prevent event from being picked up by body
	$('#dot-popup').removeClass('hidden');
  $('#dot-popup-btn').off('click', revealPopUp);
  $(document).on('click', hidePopUp);
};

// add "hidden" class to popup and update event listeners
const hidePopUp = () => {
	$('#dot-popup').addClass('hidden');
  $('#dot-popup-btn').on('click', revealPopUp);
  $(document).off('click', hidePopUp);
};

// Add click listener to dot icon which invokes reveal function
$(() => $('#dot-popup-btn').on('click', revealPopUp));


// DOM Manipulation
// myElement.classList.add('foo')
// myElement.classList.remove('bar')
