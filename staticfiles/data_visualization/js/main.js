// js/main.js
import { mat4 } from 'gl-matrix';
import { loadShader, initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { drawScene, render } from './webgl-utils/render.js';
import { handleMouseDown, handleMouseMove, handleMouseUp, rotationAngles } from './interaction.js';


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

function updateScene() {
    // Update the model-view matrix based on current rotation angles
    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]); // Initial translation
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotationAngles.x, [1, 0, 0]); // Rotate around X axis
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotationAngles.y, [0, 1, 0]); // Rotate around Y axis

    // Redraw the scene with the updated model-view matrix
    drawScene(window.gl, window.programInfo, window.buffers, window.projectionMatrix, modelViewMatrix);
}

// Ensure the updateScene function is accessible globally if needed
window.updateScene = updateScene;

async function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('Unable to initialize WebGL.');
        return;
    }

    // Expose the WebGL context globally for debugging
    window.gl = gl;

    // Initialize shader program
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) {
        console.error('Initializing shader program failed.');
        return;
    }

    // Define and expose programInfo globally for debugging
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            uColor: gl.getUniformLocation(shaderProgram, 'uColor'), // Correctly set up for the uColor uniform
        },
    };
    window.programInfo = programInfo;

    const buffers = initBuffers(gl);
    if (!buffers) {
        console.error('Initializing buffers failed.');
        return;
    }

    // Create and initialize the projection matrix
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, 45 * Math.PI / 180, gl.canvas.clientWidth / gl.canvas.clientHeight, 0.1, 100.0);

    // Create and initialize the model-view matrix
    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

    // Draw the scene with the edges; you should pass edgeCount if your drawScene function needs it
    drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix, buffers.edgeCount); // Adjusted to include edgeCount

    // Initialize 'then' for tracking the last frame's render time
    let then = {value: 0};
    // Continuously render the scene
    render(gl, programInfo, buffers, then);
}


document.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.getElementById('webgl-canvas');
    canvas.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Rest of your main function setup

    // Modify the render loop to use updated rotationAngles
    const renderLoop = () => {
    // Update the model-view matrix with current rotation angles before drawing
    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]); // Move the cube back a bit
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotationAngles.x, [1, 0, 0]); // Apply X rotation
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotationAngles.y, [0, 1, 0]); // Apply Y rotation

    drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix); // No need for edgeCount here if it's used inside drawScene for edges
    requestAnimationFrame(renderLoop);
    };
});


document.addEventListener('DOMContentLoaded', main);
