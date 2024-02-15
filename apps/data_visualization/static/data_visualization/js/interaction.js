// This function will handle user interactions with the WebGL canvas
function setupInteractionHandlers(canvas) {
    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    // Add other event listeners as necessary, such as 'click', 'wheel', or keyboard events
}

function handleMouseDown(event) {
    // Handle mouse button press
    console.log('Mouse button pressed', event);
    // Add your interaction logic here
}

function handleMouseMove(event) {
    // Handle mouse movement
    console.log('Mouse moved', event);
    // Add your interaction logic here
}

function handleMouseUp(event) {
    // Handle mouse button release
    console.log('Mouse button released', event);
    // Add your interaction logic here
}

// Initialize interaction handlers once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('webgl-canvas');
    setupInteractionHandlers(canvas);
});
