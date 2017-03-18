window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) { setTimeout(f, 1000 / 60) }

var paintingDetails = document.getElementById('paintingDetails');
var paintingImage = document.getElementById('paintingImage');

var scroll_height = document.body.scrollHeight;
var window_height = window.innerHeight;

console.log('this is the scroll-height ' + scroll_height);
console.log('this is the window_height ' + window_height);


function parallaxScroll() {
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
    var scrollamount = (scrolltop / (scroll_height-window_height)) * 100 // get amount scrolled (in %)
    paintingDetails.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
    paintingImage.style.top = -130 + scrollamount + '%'
}

window.addEventListener('scroll', function() { // on page scroll
    // indirectly calling the method b/c its better for performance.
    	//  it stutters the execution of the function (if necessary) 
    	// until the browser is able to render a new frame on the screen 
    	// prevents needless calling of the target function that only degrades performance.
    requestAnimationFrame(parallaxScroll) // call parallaxbubbles() on next available screen paint
}, false)
