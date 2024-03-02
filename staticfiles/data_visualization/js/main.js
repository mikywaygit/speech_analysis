// Import necessary modules and functions
import { mat4 } from 'gl-matrix';
import { vsSource, fsSource, loadShader, initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { drawScene } from './webgl-utils/render.js';
import { webGLInteraction, toRadians } from './interactions.js';

async function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('Unable to initialize WebGL.');
        return;
    }

    // Assign globally accessible WebGL utilities
    window.gl = gl;
    window.loadShader = loadShader;
    window.initShaderProgram = initShaderProgram;
    window.initBuffers = initBuffers;
    window.drawScene = drawScene;
    window.toRadians = toRadians;  // Make sure toRadians is correctly imported and assigned
    window.webGLInteraction = webGLInteraction;

    // Initialize rotation angles
    window.rotationAngles = { x: 0, y: 0, z: 0 };
    window.lastRotationAngles = { x: 0, y: 0, z: 0 };

    const shaderProgram = await window.initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) {
        console.error('Initializing shader program failed.');
        return;
    }

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

    window.buffers = await window.initBuffers(gl);
    if (!window.buffers) {
        console.error('Initializing buffers failed.');
        return;
    }

    // Setup interaction handlers using the methods from webGLInteraction
    webGLInteraction.setupInteractionHandlers(canvas);

    // Initialize and set up the projection matrix
    window.projectionMatrix = mat4.create();
    mat4.perspective(window.projectionMatrix, 45 * Math.PI / 180, gl.canvas.clientWidth / gl.canvas.clientHeight, 0.1, 100.0);

    // Define and start the render loop
    function renderLoop() {
        if (window.rotationAngles.x !== window.lastRotationAngles.x ||
            window.rotationAngles.y !== window.lastRotationAngles.y ||
            window.rotationAngles.z !== window.lastRotationAngles.z) {
            window.updateScene();
            window.lastRotationAngles = { ...window.rotationAngles };
        }
        requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

// Make main function globally accessible
window.main = main;

// Execute the main function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    await window.main();
});

// Define the updateScene function globally
window.updateScene = () => {
    // First, synchronize the global rotationAngles with those from the interaction
    window.rotationAngles = { ...window.webGLInteraction.rotationAngles };

    if (!window.gl || !window.programInfo || !window.buffers) {
        console.error("WebGL context, programInfo, or buffers are not initialized.");
        return;
    }

    console.log("updateScene: WebGL context, programInfo, and buffers are initialized.");
    console.log(`updateScene: Current rotationAngles`, window.rotationAngles);
    // Now drawScene uses the updated rotation angles for rendering
    window.drawScene(window.gl, window.programInfo, window.buffers, window.rotationAngles);
};
