// Aaron McTaggart
// Blink Project
// Due 10/5/2022
// Platt Tech Info Tech


// This function is called when the user hovers over the top left div, this function then changes the eye sprite in the middle to the top left eye sprite.
function topLeftLook()  {
    document.getElementById("eye1").src="img/eye_ul.gif"
    document.getElementById("eye2").src="img/eye_ul.gif"
}
// This function is called when the user hovers over the top center div, this function then changes the eye sprite in the middle to the top center eye sprite.
function topCenterLook() {
    document.getElementById("eye1").src="img/eye_uc.gif"
    document.getElementById("eye2").src="img/eye_uc.gif"
}
// This function is called when the user hovers over the top right div, this function then changes the eye sprite in the middle to the top right eye sprite.
function topRightLook() {
    document.getElementById("eye1").src="img/eye_ur.gif"
    document.getElementById("eye2").src="img/eye_ur.gif"
}
// This function is called when the user hovers over the middle left div, this function then changes the eye sprite in the middle to the middle left eye sprite.
function middleLeftLook() {
    document.getElementById("eye1").src="img/eye_cl.gif"
    document.getElementById("eye2").src="img/eye_cl.gif"
}
// This function is called when the user hovers over the middle div, this function then changes the eye sprite in the middle to the center eye sprite.
function CenterLook() {
    document.getElementById("eye1").src="img/eye_c.gif"
    document.getElementById("eye2").src="img/eye_c.gif"
}
// This function is called when the user hovers over the middle right div, this function then changes the eye sprite in the middle to the middle right eye sprite.
function middleRightLook() {
    document.getElementById("eye1").src="img/eye_cr.gif"
    document.getElementById("eye2").src="img/eye_cr.gif"
}
// This function is called when the user hovers over the bottom left div, this function then changes the eye sprite in the middle to the bottom left eye sprite.
function bottomLeftLook() {
    document.getElementById("eye1").src="img/eye_ll.gif"
    document.getElementById("eye2").src="img/eye_ll.gif"
}
// This function is called when the user hovers over the bottom div, this function then changes the eye sprite in the middle to the bottom center eye sprite.
function bottomCenterLook() {
    document.getElementById("eye1").src="img/eye_lc.gif"
    document.getElementById("eye2").src="img/eye_lc.gif"
}
// This function is called when the user hovers over the bottom right div, this function then changes the eye sprite in the middle to the bottom right eye sprite.
function bottomRightLook() {
    document.getElementById("eye1").src="img/eye_lr.gif"
    document.getElementById("eye2").src="img/eye_lr.gif"
}
// This is the blink function, the eye plays the blink sprite after 5 seconds, then opens after 1 second of being closed.
setTimeout(blink, 5000);
function blink() {
    document.getElementById("eye1").src="img/closed.gif"
    document.getElementById("eye2").src="img/closed.gif"
    setTimeout(open, 1000);
}
function open() {
    document.getElementById("eye1").src="img/eye_c.gif"
    document.getElementById("eye2").src="img/eye_c.gif"
    setTimeout(blink, 5000);
}
// When the user clicks the Show Border button this is the function that's called. This function finds all the divs with the "yes" class and adds the border style ridge to it.
function borderShow() {
    document.querySelectorAll('.yes').forEach(borderFunction)

    function borderFunction(element) {
        element.style.borderStyle = 'ridge';
    };
}