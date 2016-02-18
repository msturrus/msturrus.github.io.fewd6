
$('.headstones:not(.centerheadstone)').on('click', function() {
	var $copy = $(this).clone();
	$('main').append($copy);
	$copy.addClass("centerheadstone");
	$copy.removeClass("headstones");
	$('.headstones').addClass("blurall");
});

$('html, body').on('click', '.centerheadstone', function() {
	$(this).remove();
	$('.headstones').removeClass("blurall");
});
