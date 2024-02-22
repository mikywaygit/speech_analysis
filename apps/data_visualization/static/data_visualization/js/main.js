// js/main.js
import { initShaderProgram } from './webgl-utils/shaders.js';
import { initBuffers } from './webgl-utils/buffers.js';
import { startRenderLoop } from './webgl-utils/render.js';

async function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('Unable to initialize WebGL.');
        return;
    }

    // Load shaders from external files or define them here
    const vsSource = `...`;
    const fsSource = `...`;

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    const programInfo = {
        program: shaderProgram,
        // Other program info
    };
    const buffers = initBuffers(gl);

    startRenderLoop(gl, programInfo, buffers);
}

document.addEventListener('DOMContentLoaded', main);
