window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) { setTimeout(f, 1000 / 60) }

var paintingDetails = document.getElementById('paintingDetails');

function parallaxbubbles() {
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
    paintingDetails.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
    bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
}

window.addEventListener('scroll', function() { // on page scroll
    requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
