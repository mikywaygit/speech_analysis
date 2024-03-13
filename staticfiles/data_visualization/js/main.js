// Import necessary modules and functions
import { mat4, quat } from 'gl-matrix';
import { vsSource, fsSource, loadShader, initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { drawScene } from './webgl-utils/render.js';
import { webGLInteraction, toRadians } from './interactions.js';

async function main() {
    console.log('Starting main function.');
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('Unable to initialize WebGL.');
        return;
    } else {
        console.log('WebGL context initialized.');
    }

    // Assign globally accessible WebGL utilities
    window.gl = gl;
    window.rotationMatrix = mat4.create();
    window.loadShader = loadShader;
    window.initShaderProgram = initShaderProgram;
    window.initBuffers = initBuffers;
    window.drawScene = drawScene;
    window.toRadians = toRadians;
    window.webGLInteraction = webGLInteraction;
    window.vsSource = vsSource;
    window.fsSource = fsSource;

    // Initialize rotation angles
    window.rotationAngles = { x: 0, y: 0, z: 0 };
    window.lastRotationAngles = { x: 0, y: 0, z: 0 };

    // Shader program initialization and validation
    console.log('Initializing shader program.');
    const shaderProgram = await window.initShaderProgram(gl, window.vsSource, window.fsSource);
    if (!shaderProgram) {
        console.error('Initializing shader program failed.');
        return;
    } else {
        console.log('Shader program initialized successfully.');
    }

    window.shaderProgram = shaderProgram;
    console.log('Shader program:', window.shaderProgram);

    // Set program info and validate attribute and uniform locations
    window.programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            uColor: gl.getUniformLocation(shaderProgram, 'uColor'),
        },
    };
    console.log('Attribute and Uniform Locations:', window.programInfo.attribLocations, window.programInfo.uniformLocations);

    // Buffers initialization and validation
    console.log('Initializing buffers.');
    window.buffers = await window.initBuffers(gl);
    if (!window.buffers) {
        console.error('Initializing buffers failed.');
        return;
    } else {
        console.log('Buffers initialized successfully.');
    }

    // Setup interaction handlers using the methods from webGLInteraction
    console.log('Setting up interaction handlers.');
    webGLInteraction.setupInteractionHandlers(canvas);

    // Initialize and set up the projection matrix
    window.projectionMatrix = mat4.create();
    mat4.perspective(window.projectionMatrix, 45 * Math.PI / 180, gl.canvas.clientWidth / gl.canvas.clientHeight, 0.1, 100.0);

    // Define and start the render loop
    window.renderLoop = function() {
        console.log('Render loop tick.');
        window.drawScene(window.gl, window.programInfo, window.buffers, window.rotationMatrix);
        requestAnimationFrame(window.renderLoop);
    };

    // Call drawScene initially before starting the render loop
    window.drawScene(window.gl, window.programInfo, window.buffers, window.rotationAngles);
    console.log('Initial scene rendered.');

    // Start the render loop
    console.log('Starting render loop.');
    window.renderLoop();
}

window.updateScene = () => {
    console.log('Starting updateScene'); // Log when updateScene starts
    if (window.webGLInteraction && typeof window.webGLInteraction.axis !== 'undefined' && typeof window.webGLInteraction.angle !== 'undefined') {
        const quatInstance = quat.create();
        console.log('Quaternion before setAxisAngle:', quatInstance); // Log before setting axis and angle
        quat.setAxisAngle(quatInstance, window.webGLInteraction.axis, window.webGLInteraction.angle);
        console.log('Quaternion after setAxisAngle:', quatInstance); // Log after setting axis and angle

        // Debugging: Create a test matrix from quaternion to check its validity before applying it
        const testMatrix = mat4.create();
        mat4.fromQuat(testMatrix, quatInstance);
        console.log('Rotation matrix from quaternion (test):', testMatrix); // Log the test rotation matrix

        // Update the global rotationMatrix based on interaction
        mat4.fromQuat(window.rotationMatrix, quatInstance);
        console.log('Updated global rotationMatrix:', window.rotationMatrix); // Log after updating the rotation matrix

        if (window.rotationMatrix.some(isNaN)) { // Check for NaN values in the rotation matrix
            console.error('Rotation matrix contains NaN values. Aborting scene update.');
            return; // Skip updating the scene to avoid errors
        }

        window.drawScene(window.gl, window.programInfo, window.buffers, window.rotationMatrix);
    }
};




// Ensure the main function is called when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded. Starting main function.');
    window.main = main;
    window.main(); // Execute main function
});

// Expose all gl-matrix utilities globally for debugging
window.mat4 = mat4;
window.quat = quat;