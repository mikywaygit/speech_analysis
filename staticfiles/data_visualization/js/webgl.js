import * as glMatrix from './gl-matrix-min.js';
import { mat4 } from './gl-matrix-min.js';

// Initialize the matrices at the top level of the script, outside any functions
let projectionMatrix = mat4.create();
let modelViewMatrix = mat4.create();

// Define any other variables or constants you may need
let shaderProgram, programInfo, buffers;

// Define your drawScene function
function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things

    // Clear the canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    // Use the index buffer
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Set the shader uniforms for the projection and model view matrices
    mat4.perspective(projectionMatrix, 45 * Math.PI / 180, // field of view in radians
                     gl.canvas.clientWidth / gl.canvas.clientHeight, // aspect ratio
                     0.1, // near clipping plane
                     100.0); // far clipping plane
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]); // amount to translate

    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    // Draw the cube
    const vertexCount = 36; // 6 sides * 2 triangles per side * 3 vertices per triangle
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}


// Define your render function
// Define the render loop function
function render(now) {
    now *= 0.001; // convert time to seconds

    // Calculate the time difference since the last frame
    const deltaTime = now - then;
    then = now;

    // Clear the canvas and depth buffer
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Set clear color to black, fully opaque
    gl.clearDepth(1.0);                // Clear everything
    gl.enable(gl.DEPTH_TEST);          // Enable depth testing
    gl.depthFunc(gl.LEQUAL);           // Near things obscure far things

    // Clear the canvas before drawing
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Draw the scene
    drawScene(gl, programInfo, buffers);

    // Request to render the next frame
    requestAnimationFrame(render);
}

// Initial time setup for the render loop
let then = 0;

// Start the rendering loop
requestAnimationFrame(render);


function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}


function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

function initBuffers(gl) {
    // Buffer for the cube's vertices
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Array of positions for the cube
    const positions = [
        // Front face
        -1.0, -1.0,  1.0,
         1.0, -1.0,  1.0,
         1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,

        // Back face
        -1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
         1.0,  1.0, -1.0,
        -1.0,  1.0, -1.0,

        // Top face
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0, -1.0,

        // Bottom face
        -1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
         1.0, -1.0,  1.0,
        -1.0, -1.0,  1.0,

        // Right face
         1.0, -1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0,  1.0,  1.0,
         1.0, -1.0,  1.0,

        // Left face
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0,  1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Create a buffer for the cube's indices
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    // This array defines each face as two triangles, using the indices into the vertex array to specify each triangle's position
    const indices = [
        0, 1, 2,     0, 2, 3,    // front
        4, 5, 6,     4, 6, 7,    // back
        8, 9, 10,    8, 10, 11,  // top
        12, 13, 14,  12, 14, 15, // bottom
        16, 17, 18,  16, 18, 19, // right
        20, 21, 22,  20, 22, 23, // left
    ];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Return the buffer object updated with positions and indices
    return {
        position: positionBuffer,
        indices: indexBuffer,
    };
}


// When the DOM is fully loaded, start the WebGL program
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the WebGL canvas and context
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
        console.error('Unable to find the canvas element.');
        return;
    }

    const gl = canvas.getContext('webgl');
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }

    // Vertex shader program
    const vsSource = `
        attribute vec3 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
    
        void main(void) {
            gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
        }
    `;

    // Fragment shader program
    const fsSource = `
        void main(void) {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Set the color to white
        }
    `;

    // Initialize shaders and the program
    shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) {
        console.error('Failed to initialize the shader program.');
        return;
    }

    // Setup program information for shaders
    programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    };

    // Initialize buffers for the geometry
    buffers = initBuffers(gl);

    // Correctly start the render loop inside the DOMContentLoaded listener
    let then = 0;
    requestAnimationFrame(function render(now) {
        now *= 0.001; // convert time to seconds
        const deltaTime = now - then;
        then = now;

        drawScene(gl, programInfo, buffers);

        requestAnimationFrame(render); // Correctly placed inside the render function itself for recursion
    });
});
