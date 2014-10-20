$(document).ready(function(){

	//MOUSEOVER EFFECTS
	$('.header').mouseenter(function(){
		$(this).fadeTo(150,1);
	});
	$('.header').mouseleave(function(){
		$(this).fadeTo(150,0.5);
	});

	//HOMEMADE ACCORDION
	var nDropdowns = $('.dropdown').length;
	var ddOpen = [];
	for (n=0; n<nDropdowns; n++) {
		ddOpen.push($('.dropdown').eq(n).is(':visible'));
	}

	$('.header').click(function(){
		$('.dropdown').slideUp('fast');
		var index = $('.header').index(this);
		if (!ddClicked(ddOpen)) {
			$('.dropdown').eq(index).slideToggle('fast');
			reset(ddOpen, nDropdowns);
			ddOpen[index] = true;
		}
		else if (ddOpen[index]) {
			ddOpen[index] = false;
			return
		}
		else {
			reset(ddOpen, nDropdowns);
			ddOpen[index] = true;
			$('.dropdown').eq(index).delay('200').slideToggle("fast");
		}
	});
});

reset = function(dd, nD) {
	for (i=0; i<nD; i++) {
		dd[i] = false;
	} 
}

ddClicked = function(dd) {
	var allTrue = dd.some(function(item, index, array) {return item});
	return allTrue
}