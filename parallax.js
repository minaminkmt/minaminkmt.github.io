//get the element that will be transformed during scrolling
const textBehind = document.getElementById('text-behind');
const textFront = document.getElementById('text-front');
const textBehindBlur = document.getElementById('text-behind');
const canvasRect = document.getElementById('canvas');

//define the increment of scaling
//text scaling
const parallaxScaling = 0.0005;
//canvas scAling 
const parallaxScaling2 = 0.00025;
//Three.js Camera Rotation Speed
const parallaxScaling3 = 0.0000001;

//initialize scroll and ease values
let currentScroll = 0;
let targetScroll = 0;
let ease = 0.001;

//define a global variable to connect scroll-based animations to 3D animations.
let thetal = 0;

//This function updates the scale and position of the elements on scroll 
function updateScale() {

    //get the top and bottom posiiton of the canvasRect element rlative to the viewport.
    let rect = canvasRect.getBoundingClientRect();

    //calculate th start and end scroll positions relative to the top of the document.
    //window.pageOffset provide the amount of pixels that the document is currently scrolled vertically. 
    //Adding rect.top/rect.bottom converts the relative viewport position to an absolute document position.
    let startScrollPosition = window.pageYOffset + rect.top;
    let endScrollPosition = window.pageYOffset + rect.bottom;

    //the condition checks the following
    //1. If the bottom edge of the viewport is above the starting position of the element or 
    //2. If the top edge of the viewport is below the ending position of our element.
    //In other words, it checks if the target element is outside the current viewport.
    if (targetScroll + window.innerHeight < startScrollPosition || targetScroll > endScrollPosition) {
        //if either of the conditions is true, we are not viewing the element and thus we should exit (return) from the function early, without updating the parallax effects.
        return;
    }

    // The currentScroll value is being adjusted to gradually approach the targetScroll value.
    //This creates a smoother, easing effect rather than directly jumping to the target value.
    currentScroll += (targetScroll - currentScroll) * ease;


}