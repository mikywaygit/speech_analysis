// Global variables to track rotation
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotationAngles = { x: 0, y: 0 };

export const toRadians = (angleInDegrees) => angleInDegrees * Math.PI / 180;

export function setupInteractionHandlers(canvas) {
    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('mouseleave', handleMouseUp, false); // Handle case when the mouse leaves the canvas
}

export function handleMouseDown(event) {
    isDragging = true;
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
    console.log('MouseDown', { isDragging, previousMousePosition }); // Log the state after mouse down
}

export function handleMouseMove(event) {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;

    rotationAngles.y += toRadians(deltaX);
    rotationAngles.x += toRadians(deltaY);

    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;

    console.log('MouseMove', { deltaX, deltaY, rotationAngles }); // Log the state after mouse move

    // Emit an event or call a global function to trigger the scene update with the new rotation angles
    updateScene(); // This needs to be defined in your main.js or a similar central place
}

export function handleMouseUp(event) {
    isDragging = false;
    console.log('MouseUp', { isDragging }); // Log the state after mouse up
}
