// Global state encapsulated under a single namespace
window.webGLInteraction = {
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
    rotationAngles: { x: 0, y: 0, z: 0 } // Make sure this aligns with how you've defined it elsewhere
};

// Utility functions
export const toRadians = (angleInDegrees) => angleInDegrees * Math.PI / 180;

// Setup interaction handlers for the canvas
export function setupInteractionHandlers(canvas) {
    canvas.addEventListener('mousedown', window.webGLInteraction.handleMouseDown, false);
    canvas.addEventListener('mousemove', window.webGLInteraction.handleMouseMove, false);
    canvas.addEventListener('mouseup', window.webGLInteraction.handleMouseUp, false);
    canvas.addEventListener('mouseleave', window.webGLInteraction.handleMouseUp, false); // Handle case when the mouse leaves the canvas
}

// Mouse down event
window.webGLInteraction.handleMouseDown = (event) => {
    window.webGLInteraction.isDragging = true;
    window.webGLInteraction.previousMousePosition = { x: event.clientX, y: event.clientY };
    console.log('MouseDown', { isDragging: window.webGLInteraction.isDragging, previousMousePosition: window.webGLInteraction.previousMousePosition });
};

// Mouse move event
window.webGLInteraction.handleMouseMove = (event) => {
    if (!window.webGLInteraction.isDragging) return;

    const deltaX = event.clientX - window.webGLInteraction.previousMousePosition.x;
    const deltaY = event.clientY - window.webGLInteraction.previousMousePosition.y;

    window.webGLInteraction.rotationAngles.y += toRadians(deltaX);
    window.webGLInteraction.rotationAngles.x -= toRadians(deltaY);

    window.webGLInteraction.previousMousePosition = { x: event.clientX, y: event.clientY };

    console.log('MouseMove', { deltaX, deltaY, rotationAngles: window.webGLInteraction.rotationAngles });

    if (window.updateScene) { // Check if updateScene function exists
        window.updateScene();
    } else {
        console.error('updateScene function is not defined.');
    }
};

// Mouse up event
window.webGLInteraction.handleMouseUp = (event) => {
    if (window.webGLInteraction.isDragging) {
        window.webGLInteraction.isDragging = false;
        console.log('MouseUp', { isDragging: window.webGLInteraction.isDragging });
    }
};
