// js/main.js
import { initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { drawScene,  render } from './webgl-utils/render.js';


// Expose functions to the global scope for debugging
window.initShaderProgram = initShaderProgram;
window.initBuffers = initBuffers;
window.drawScene = drawScene;
window.render = render;


async function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('Unable to initialize WebGL.');
        return;
    }

    // Assuming vsSource and fsSource are defined here or imported
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

    drawScene(gl, programInfo, buffers);
    render(gl, programInfo, buffers);
}

document.addEventListener('DOMContentLoaded', main);
