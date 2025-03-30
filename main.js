//Get elements from the DOM
const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');

//Add mousemove and touchmove event
wrapper.addEventListener('mousemove', splitScreen);
wrapper.addEventListener('touchmove', splitScreen);

//Split screen function
function splitScreen(e) {
    //X coordinate variable
    let x;
    //Check if it's a touch event
    if (e.type === 'touchmove') {
        //Use the first touch point for simplicity
        const touch = e.touches[0];
        //Set X coordinate to touch position on screen
        x = touch.clientX;
        //And if it's a mousemove event
    } else {
        //Set X coordinate to mouse position on screen
        x = e.clientX;
    }
    /*Move top layer by setting its left
    position to the X coordinate value we set up*/
    topLayer.style.width = x + 'px';
}