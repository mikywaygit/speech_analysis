// Enhanced Utility functions for vector operations
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    subtract(v) {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    cross(v) {
        return new Vector3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    }

    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    length() {
        return Math.sqrt(this.dot(this));
    }

    normalize() {
        const len = this.length();
        return len > 0 ? new Vector3(this.x / len, this.y / len, this.z / len) : new Vector3(0, 0, 0);
    }
}

function toRadians(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
}

// Interaction logic
class Interaction {
    constructor(canvas) {
        this.canvas = canvas;
        this.isDragging = false;
        this.previousMousePosition = new Vector3(0, 0, 0);
        this.axis = new Vector3(0, 1, 0);
        this.angle = 0;

        // Bind event handlers
        this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
        this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
        this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
        this.canvas.addEventListener('mouseleave', this.handleMouseUp.bind(this), false);
    }

    mapToSphere(x, y) {
        const point = new Vector3(x, y, 0);
        const squareDist = x * x + y * y;

        if (squareDist <= 1) {
            point.z = Math.sqrt(1 - squareDist);
        } else {
            point.z = 0; // Project the point onto the sphere
        }
        return point.normalize(); // Always return a normalized vector
    }

    handleMouseDown(event) {
        this.isDragging = true;
        const x = (event.clientX / this.canvas.clientWidth) * 2 - 1;
        const y = -(event.clientY / this.canvas.clientHeight) * 2 + 1;
        this.previousMousePosition = new Vector3(x, y, 0);
    }

    handleMouseUp(event) {
        this.isDragging = false;
    }

    handleMouseMove(event) {
        if (!this.isDragging) return;

        const x = (event.clientX / this.canvas.clientWidth) * 2 - 1;
        const y = -(event.clientY / this.canvas.clientHeight) * 2 + 1;
        const currentMousePosition = new Vector3(x, y, 0);

        const from = this.mapToSphere(this.previousMousePosition.x, this.previousMousePosition.y);
        const to = this.mapToSphere(currentMousePosition.x, currentMousePosition.y);

        this.axis = from.cross(to);
        const dotProduct = Math.max(-1, Math.min(from.dot(to), 1)); // Clamp dot product value between -1 and 1
        this.angle = Math.acos(dotProduct);

        if (typeof window.updateScene === 'function') {
            window.webGLInteraction.axis = [this.axis.x, this.axis.y, this.axis.z];
            window.webGLInteraction.angle = this.angle;
            window.updateScene();
        }

        this.previousMousePosition = currentMousePosition;
    }
}

// Initialize the interaction object and bind it to a specific canvas
const webGLInteraction = new Interaction(document.getElementById('webgl-canvas'));
export { webGLInteraction, toRadians };
