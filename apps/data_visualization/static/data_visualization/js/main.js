// js/main.js
import { mat4 } from 'gl-matrix';
import { vsSource, fsSource, loadShader, initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { drawScene } from './webgl-utils/render.js';
import { setupInteractionHandlers, handleMouseDown, handleMouseMove, handleMouseUp } from './interaction.js';

// Expose functions to the global scope for debugging
window.loadShader = loadShader;
window.initShaderProgram = initShaderProgram;
window.initBuffers = initBuffers;
window.drawScene = drawScene;
window.mat4 = mat4;

// Expose shader sources to the global scope
window.vsSource = vsSource;
window.fsSource = fsSource;
window.setupInteractionHandlers = setupInteractionHandlers;
window.handleMouseDown = handleMouseDown;
window.handleMouseMove = handleMouseMove;
window.handleMouseUp = handleMouseUp;
window.rotationAngles = { x: 0, y: 0, z: 0 };
window.lastRotationAngles = { x: 0, y: 0, z: 0 };

function updateScene() {
    if (!window.gl || !window.programInfo || !window.buffers) {
        console.error("WebGL context, programInfo, or buffers are not initialized.");
        return;
    }

    // Log for debugging
    console.log("updateScene: WebGL context, programInfo, and buffers are initialized.");
    console.log(`updateScene: Current rotationAngles`, window.rotationAngles);

    // Update the model-view matrix based on current rotation angles
    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.x, [1, 0, 0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.y, [0, 1, 0]);
    if (window.rotationAngles.z !== undefined) {
        mat4.rotate(modelViewMatrix, modelViewMatrix, window.rotationAngles.z, [0, 0, 1]);
    }

    // Redraw the scene with the updated model-view matrix
    drawScene(window.gl, window.programInfo, window.buffers, window.rotationAngles);
    console.log("updateScene: Scene redrawn");
}

window.updateScene = updateScene;

async function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('Unable to initialize WebGL.');
        return;
    }

    window.gl = gl;

    const shaderProgram = await initShaderProgram(gl, vsSource, fsSource);
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

    window.buffers = await initBuffers(gl);
    if (!window.buffers) {
        console.error('Initializing buffers failed.');
        return;
    }

    setupInteractionHandlers(canvas);

    window.projectionMatrix = mat4.create();
    mat4.perspective(window.projectionMatrix, 45 * Math.PI / 180, gl.canvas.clientWidth / gl.canvas.clientHeight, 0.1, 100.0);

    function renderLoop() {
        if (window.rotationAngles.x !== window.lastRotationAngles.x ||
            window.rotationAngles.y !== window.lastRotationAngles.y ||
            window.rotationAngles.z !== window.lastRotationAngles.z) {
            updateScene();
            window.lastRotationAngles = { ...window.rotationAngles };
        }
        requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

document.addEventListener('DOMContentLoaded', async () => {
    await main();
});
