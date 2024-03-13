// Utility functions for vector operations
function vecSubtract(a, b) {
    console.log('vecSubtract called with:', a, b);
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

function vecDot(a, b) {
    console.log('vecDot called with:', a, b);
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

function vecLength(v) {
    console.log('vecLength called with:', v);
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

function vecNormalize(v) {
    console.log('vecNormalize called with:', v);
    const len = vecLength(v);
    if (len === 0) {
        console.log('Preventing division by zero for vector normalization.');
        return { x: 0, y: 0, z: 0 };
    }
    return { x: v.x / len, y: v.y / len, z: v.z / len };
}

function vecCross(a, b) {
    console.log('vecCross called with:', a, b);
    return {
        x: a.y * b.z - a.z * b.y,
        y: a.z * b.x - a.x * b.z,
        z: a.x * b.y - a.y * b.x
    };
}

const toRadians = (angleInDegrees) => {
    console.log('toRadians called with:', angleInDegrees);
    return angleInDegrees * Math.PI / 180;
};

// Define the interaction object to hold state and handlers
const interaction = {
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
    axis: [0, 1, 0], // Default axis for initial rotation, can be adjusted
    angle: 0, // Default angle for initial rotation

    handleMouseDown(event) {
        this.isDragging = true;
        this.previousMousePosition = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1
        };
        console.log('MouseDown Event Triggered', this.previousMousePosition);
    },

    handleMouseUp(event) {
        if (this.isDragging) {
            this.isDragging = false;
            console.log('MouseUp Event Triggered', { isDragging: this.isDragging });
            console.log('Updating global axis/angle:', this.axis, this.angle);
            window.webGLInteraction.axis = this.axis;
            window.webGLInteraction.angle = this.angle;
        }
    },

    handleMouseMove(event) {
        console.log('Mouse Move Detected');
        if (!this.isDragging) {
            console.log('MouseMove without drag detected');
            return;
        }

        console.log('MouseMove with drag detected');
        const currentMousePosition = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1
        };
        console.log('Current mouse position:', currentMousePosition);

        const from = this.mapToSphere(this.previousMousePosition.x, this.previousMousePosition.y);
        const to = this.mapToSphere(currentMousePosition.x, currentMousePosition.y);
        console.log('Mapping to sphere:', from, to);

        this.axis = vecCross(from, to);
        this.angle = Math.acos(Math.min(1, vecDot(from, to)));
        console.log('MouseMove Event Triggered', { axis: this.axis, angle: this.angle });

        if (typeof window.updateScene === 'function') {
            console.log('Calling updateScene');
            window.updateScene();
        }
    },

    mapToSphere(x, y) {
        console.log('Mapping to sphere with:', x, y);
        let point = { x: x, y: y, z: 0 };
        const squareDist = x * x + y * y;

        if (squareDist <= 1) {
            point.z = Math.sqrt(1 - squareDist);
        } else {
            point = vecNormalize(point);
        }
        console.log('Mapped point:', point);
        return point;
    },

    setupInteractionHandlers(canvas) {
        canvas.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
        canvas.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
        canvas.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
        canvas.addEventListener('mouseleave', this.handleMouseUp.bind(this), false);
        console.log('Event handlers attached to canvas.');
    }
};

// Export the entire namespace as a module
export { interaction as webGLInteraction, toRadians };
