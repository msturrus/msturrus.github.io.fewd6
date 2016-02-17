
$('.headstones:not(.centerheadstone)').on('click', function() {
	var $copy = $(this).clone();
	$('main').append($copy);
	$copy.addClass("centerheadstone");
	$copy.removeClass("headstones");
});

$('html, body').on('click', '.centerheadstone', function() {
	$(this).remove();
});


if ( addOrRemove ) {
  $( "#foo" ).addClass( className );
} else {
  $( "#foo" ).removeClass( className );
}

$(function () {
            var top = Math.max($(window).height() / 2 - $("#dvDemo")[0].offsetHeight / 2, 0);
            var left = Math.max($(window).width() / 2 - $("#dvDemo")[0].offsetWidth / 2, 0);
            $("#dvDemo").css('top', top + "px");
            $("#dvDemo").css('left', left + "px");
            $("#dvDemo").css('position', 'fixed');
        });








// The array of our image source file paths
var imageSources = ['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];

// A running talley of what 'slide' the user is currenlty on — start out at 0
var currentPosition = 0;

// An array that contains the running talley of 'votes' that represent each image in our carousel
var votes = [0,0,0,0,0,0];

// When clicking on next
$('#next').on('click', function () {
  // Add 1 to the current position
	currentPosition += 1;
	// re-enable the previous button
	$('#prev').prop('disabled', false);
	// Call the changeImage function to chang the image source to the new current image, and display the vote talley for that image
	changeImage();
	// If the currentPosition is the last image in the carousel
 	if (currentPosition === imageSources.length - 1) {
 		// disable the next button
		$('#next').prop('disabled', true);
	}
});

// When clicking on prev
$('#prev').on('click', function () {
	// Subtract 1 from the current position
	currentPosition -= 1;
	// if the next button is disabled, re-enable it
	$('#next').prop('disabled', false);
	// Call the changeImage function to chang the image source to the new current image, and display the vote talley for that image
	changeImage();
	// if the current position is on the very first image
	if (currentPosition === 0 ) {
		// disable the prev button
		$('#prev').prop('disabled', true);
	}
});

// When clicking on the upvote icon
$('#upvote').on('click',function () {
	// add 1 to the vote talley in the votes[] array that matches the index of the currentPosition
	votes[currentPosition] += 1;
	// Call the displayVotes function to display the vote talley
	displayVotes();
});


$('#downvote').on('click',function () {
	// add 1 to the vote talley in the votes[] array that matches the index of the currentPosition
	votes[currentPosition] -= 1;
	// Call the displayVotes function to display the vote talley
	displayVotes();
});

// The function to change the image
function changeImage(){
	// select the img element and change its attribute to the file path in the index of the imageSources array that corresponds with the currentPosition
	$('#image-to-vote-on').attr('src', imageSources[currentPosition]);
	// Call the displayVotes function to display the vote talley
	displayVotes();
}

// The function to display the votes
function displayVotes() {
	// Select the #votes element and print the vote talley of the current image
	$('#votes').html("Likes: " + votes[currentPosition]);
}

