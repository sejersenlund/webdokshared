// JavaScript Document

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#cloud1').css('top',(0-(scrolled*.25))+'px');
    $('#cloud2').css('top',(0-(scrolled*.5))+'px');
    $('#cloud3').css('top',(0-(scrolled*.75))+'px');
	$('#cloud4').css('top',(0-(scrolled*.25))+'px');
    $('#cloud5').css('top',(0-(scrolled*.5))+'px');
    $('#cloud6').css('top',(0-(scrolled*.75))+'px');
	$('#cloud7').css('top',(0-(scrolled*.75))+'px');
}