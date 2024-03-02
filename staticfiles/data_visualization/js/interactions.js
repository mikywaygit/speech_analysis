// Define the utility function and other functionalities within the module scope
const toRadians = (angleInDegrees) => angleInDegrees * Math.PI / 180;

const handleMouseDown = function(event) {
    this.isDragging = true;
    this.previousMousePosition = { x: event.clientX, y: event.clientY };
    console.log('MouseDown', { isDragging: this.isDragging, previousMousePosition: this.previousMousePosition });
};

const handleMouseMove = function(event) {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.previousMousePosition.x;
    const deltaY = event.clientY - this.previousMousePosition.y;

    this.rotationAngles.y += toRadians(deltaX);
    this.rotationAngles.x -= toRadians(deltaY);

    this.previousMousePosition = { x: event.clientX, y: event.clientY };

    console.log('MouseMove', { deltaX, deltaY, rotationAngles: this.rotationAngles });

    // Assuming window.updateScene is defined elsewhere and responsible for the rendering
    if (typeof window.updateScene === 'function') {
        window.updateScene();
    } else {
        console.error('updateScene function is not defined.');
    }
};

const handleMouseUp = function(event) {
    if (this.isDragging) {
        this.isDragging = false;
        console.log('MouseUp', { isDragging: this.isDragging });
    }
};

// Package all interaction-related functionalities
const webGLInteraction = {
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
    rotationAngles: { x: 0, y: 0, z: 0 },
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    setupInteractionHandlers: function(canvas) {
        canvas.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
        canvas.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
        canvas.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
        canvas.addEventListener('mouseleave', this.handleMouseUp.bind(this), false);
    }
};

// Export the entire namespace as a module
export { webGLInteraction, toRadians };
