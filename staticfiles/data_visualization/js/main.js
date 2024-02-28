// js/main.js
import { mat4 } from 'gl-matrix';
import { loadShader, initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { drawScene, render } from './webgl-utils/render.js';
import { setupInteractionHandlers, handleMouseDown, handleMouseMove, handleMouseUp, rotationAngles } from './interaction.js';


// Expose functions to the global scope for debugging
window.loadShader = loadShader;
window.initShaderProgram = initShaderProgram;
window.initBuffers = initBuffers;
window.drawScene = drawScene;
window.render = render;
window.mat4 = mat4;

// Shader sources
const vsSource = `
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
`;

const fsSource = `
    precision mediump float;
    uniform vec4 uColor; // Ensure this matches your shader's uniform name

    void main() {
        gl_FragColor = uColor; // Use the uniform color
    }
`;

// Expose shader sources to the global scope
window.vsSource = vsSource;
window.fsSource = fsSource;

window.rotationAngles = { x: 0, y: 0, z: 0 };

function updateScene() {
    // Ensure the WebGL context and programInfo are correctly initialized
    if (!window.gl || !window.programInfo || !window.buffers) {
        console.error("WebGL context, programInfo, or buffers are not initialized.");
        return;
    }

    // Update the model-view matrix based on current rotation angles
    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]); // Initial translation
    mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.x, [1, 0, 0]); // Rotate around X axis
    mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.y, [0, 1, 0]); // Rotate around Y axis
    // Optionally, if you've implemented rotation around the Z-axis:
    // mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.z, [0, 0, 1]); // Rotate around Z axis

    // Redraw the scene with the updated model-view matrix
    drawScene(window.gl, window.programInfo, window.buffers, window.projectionMatrix, modelViewMatrix);
}

// Make sure the updateScene function is accessible globally
window.updateScene = updateScene;

// Add this line at the end of your main.js or inside the main function after setting up WebGL context, shader programs, and buffers
document.addEventListener('DOMContentLoaded', () => {
    // Initialize rotationAngles if not already set
    window.rotationAngles = window.rotationAngles || { x: 0, y: 0, z: 0 };
    updateScene(); // Initial scene update to apply any default transformations
});

async function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('Unable to initialize WebGL.');
        return;
    }

    // Initialize shader program
    const shaderProgram = await initShaderProgram(gl, window.vsSource, window.fsSource);
    if (!shaderProgram) {
        console.error('Initializing shader program failed.');
        return;
    }

    // Setup programInfo with shader locations
    window.programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            uColor: gl.getUniformLocation(shaderProgram, 'uColor'), // Assuming uColor uniform is used
        },
    };

    // Initialize buffers
    window.buffers = await initBuffers(gl);
    if (!window.buffers) {
        console.error('Initializing buffers failed.');
        return;
    }

    // Setup interaction handlers
    setupInteractionHandlers(canvas);

    // Create and initialize matrices
    window.projectionMatrix = mat4.create();
    mat4.perspective(window.projectionMatrix, 45 * Math.PI / 180, gl.canvas.clientWidth / gl.canvas.clientHeight, 0.1, 100.0);

    function updateScene() {
        // Ensure the WebGL context, programInfo, and buffers are correctly initialized
        if (!window.gl || !window.programInfo || !window.buffers) {
            console.error("WebGL context, programInfo, or buffers are not initialized.");
            return;
        }

        // Update the model-view matrix based on current rotation angles
        const modelViewMatrix = mat4.create();
        mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.x, [1, 0, 0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.y, [0, 1, 0]);

        // Redraw the scene
        drawScene(gl, window.programInfo, window.buffers, window.projectionMatrix, modelViewMatrix);
    }

    // Make updateScene globally accessible
    window.updateScene = updateScene;

    // Render loop
    function renderLoop() {
        updateScene();
        requestAnimationFrame(renderLoop);
    }

    renderLoop();
}


document.addEventListener('DOMContentLoaded', main);
