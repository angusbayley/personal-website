$(document).ready(function(){
	$('.header').mouseenter(function(){
		$(this).fadeTo(150,1);
	});
	$('.header').mouseleave(function(){
		$(this).fadeTo(150,0.5);
	});
	$('.header').click(function(){
		$('.dropdown').slideUp('fast');
		var index = $('.header').index(this);
		if (!ddClicked()) {
			$('.dropdown').eq(index).slideToggle('fast');
		}
		else {
			$('.dropdown').eq(index).delay('200').slideToggle("fast");
		}
	});
	$('#gizmos span').click(function(){
		//alert('clicked the span');
		$('#gizmosDropdown').slideToggle("fast");
	});
});

ddClicked = function() {
	var nDropdowns = $('.dropdown').length;
	var checkArray = [];
	for (n=0; n<nDropdowns; n++) {
		checkArray.push($('.dropdown').eq(n).is(':visible'));
	}
	var allTrue = checkArray.some(function(item, index, array) {return item});
	return allTrue
}