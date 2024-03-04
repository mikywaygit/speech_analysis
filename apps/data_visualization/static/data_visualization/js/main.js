// Import necessary modules and functions
import { mat4, quat } from 'gl-matrix';
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
    window.toRadians = toRadians;
    window.webGLInteraction = webGLInteraction;
    window.vsSource = vsSource;
    window.fsSource = fsSource;

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
    window.renderLoop = function() {
        if (window.rotationAngles.x !== window.lastRotationAngles.x ||
            window.rotationAngles.y !== window.lastRotationAngles.y ||
            window.rotationAngles.z !== window.lastRotationAngles.z) {
            window.updateScene();
            window.lastRotationAngles = { ...window.rotationAngles };
        }
        requestAnimationFrame(window.renderLoop);
    };

    // Call drawScene initially before starting the render loop
    window.drawScene(window.gl, window.programInfo, window.buffers, window.rotationAngles);

    // Start the render loop
    window.renderLoop();
}

// Update the scene based on interactions
window.updateScene = () => {
    if (window.webGLInteraction && typeof window.webGLInteraction.axis !== 'undefined' && typeof window.webGLInteraction.angle !== 'undefined') {
        const quatInstance = quat.create();
        quat.setAxisAngle(quatInstance, window.webGLInteraction.axis, window.webGLInteraction.angle);

        const rotationMatrix = mat4.create();
        mat4.fromQuat(rotationMatrix, quatInstance);

        if (window.drawScene) {
            window.drawScene(window.gl, window.programInfo, window.buffers, rotationMatrix);
        } else {
            console.error('drawScene function is not defined.');
        }
    } else {
        console.warn('Waiting for WebGL interaction axis and angle to be defined.');
    }
};

// Ensure the main function is called when the document is fully loaded
document.addEventListener('DOMContentLoaded', window.main = main);  // Set main function globally

// Expose all gl-matrix utilities globally for debugging
window.mat4 = mat4;
window.quat = quat;
window.main = main;  // Ensure main is also exposed globally
