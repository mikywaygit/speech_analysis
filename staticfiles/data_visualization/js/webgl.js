import * as glMatrix from 'gl-matrix';


document.addEventListener('DOMContentLoaded', async (event) => {
    // Attempt to access the WebGL context
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
        console.error('Unable to find the canvas element.');
        return;
    }

    const gl = canvas.getContext('webgl');
    if (!gl) {
        console.error('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }
    console.log('WebGL context initialized successfully.');

    // Dynamically import gl-matrix and check accessibility
    try {
        const glMatrix = await import('gl-matrix');
        const mat4 = glMatrix.mat4.create();
        console.log('gl-matrix library is correctly imported:', mat4);
    } catch (error) {
        console.error('gl-matrix library is not correctly imported:', error);
    }
});
