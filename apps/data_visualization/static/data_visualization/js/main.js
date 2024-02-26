// js/main.js
import { mat4 } from 'gl-matrix';
import { initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { drawScene, render } from './webgl-utils/render.js';

// Expose functions to the global scope for debugging
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
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
`;

// Expose shader sources to the global scope
window.vsSource = vsSource;
window.fsSource = fsSource;


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

    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    };

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

    drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix);

    // Initialize 'then' for tracking the last frame's render time
    let then = {value: 0};
    render(gl, programInfo, buffers, then);
}

document.addEventListener('DOMContentLoaded', main);
