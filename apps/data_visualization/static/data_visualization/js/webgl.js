// webgl.js

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

// Function to initialize the shaders
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

// Function to create a shader of a given type, upload GLSL source, and compile it
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

// Function to initialize the buffers
function initBuffers(gl) {
    const vertices = [
    // Front face
    -0.5, -0.5,  0.5,  // Vertex 0
     0.5, -0.5,  0.5,  // Vertex 1
     0.5,  0.5,  0.5,  // Vertex 2
    -0.5,  0.5,  0.5,  // Vertex 3

    // Back face
    -0.5, -0.5, -0.5,  // Vertex 4
    -0.5,  0.5, -0.5,  // Vertex 5
     0.5,  0.5, -0.5,  // Vertex 6
     0.5, -0.5, -0.5,  // Vertex 7

    // Top face
    -0.5,  0.5, -0.5,  // Vertex 5
    -0.5,  0.5,  0.5,  // Vertex 3
     0.5,  0.5,  0.5,  // Vertex 2
     0.5,  0.5, -0.5,  // Vertex 6

    // Bottom face
    -0.5, -0.5, -0.5,  // Vertex 4
     0.5, -0.5, -0.5,  // Vertex 7
     0.5, -0.5,  0.5,  // Vertex 1
    -0.5, -0.5,  0.5,  // Vertex 0

    // Right face
     0.5, -0.5, -0.5,  // Vertex 7
     0.5,  0.5, -0.5,  // Vertex 6
     0.5,  0.5,  0.5,  // Vertex 2
     0.5, -0.5,  0.5,  // Vertex 1

    // Left face
    -0.5, -0.5, -0.5,  // Vertex 4
    -0.5, -0.5,  0.5,  // Vertex 0
    -0.5,  0.5,  0.5,  // Vertex 3
    -0.5,  0.5, -0.5,  // Vertex 5
];

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const indices = [
        // Front face
        0, 1, 2, 0, 2, 3,
        // Back face
        4, 5, 6, 4, 6, 7,
        // Top face
        8, 9, 10, 8, 10, 11,
        // Bottom face
        12, 13, 14, 12, 14, 15,
        // Right face
        16, 17, 18, 16, 18, 19,
        // Left face
        20, 21, 22, 20, 22, 23
        ];

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    return {
        vertexBuffer,
        indexBuffer
    };
}

// Function to draw the scene
function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Establish the perspective with which we want to view the scene
    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // Set the drawing position to the "identity" point, which is the center of the scene
    const modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to start drawing the square
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

    // Tell WebGL how to pull out the positions from the position buffer into the vertex
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexBuffer);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        3, // Number of components per vertex position (x, y, z)
        gl.FLOAT, // The data type of each component
        false, // Normalization (not relevant here, no color data)
        0, // Stride (0 = use type and numComponents above)
        0 // Offset into the currently bound buffer
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    // Tell WebGL to use our program when drawing
    gl.useProgram(programInfo.program);

    // Set the shader uniforms
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix
    );
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix
    );

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indexBuffer);
    {
        const vertexCount = 36; // Because each face has 2 triangles with 3 vertices each
        const type = gl.UNSIGNED_SHORT; // The data type in the element array buffer (Uint16Array)
        const offset = 0; // How many bytes inside the buffer to start from
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}

// Initialize a shader program; this is where all the lighting for the vertices and so forth is established.
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
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

// Here's where we call the routine that builds all the objects we'll be drawing.
const buffers = initBuffers(gl);

// Draw the scene repeatedly
function render() {
    drawScene(gl, programInfo, buffers);
    requestAnimationFrame(render);
}
render();

// Get the canvas element from the DOM
document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('webgl-canvas');
});

// Initialize the WebGL context
const gl = canvas.getContext('webgl');

// If we don't have a GL context, give up now
if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    throw new Error('WebGL not supported');
}


// Collect all the info needed to use the shader program.
// Look up locations of attributes and uniforms used by the shader program.
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

// Here's where we call the routine that builds all the objects we'll be drawing.
const buffers = initBuffers(gl);

// Draw the scene
function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.

    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    // note: glmatrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(projectionMatrix,
                     fieldOfView,
                     aspect,
                     zNear,
                     zFar);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    const modelViewMatrix = mat4.create();

    // Move the drawing position a bit to where we want to start
    // drawing the square.
    mat4.translate(modelViewMatrix,     // destination matrix
                   modelViewMatrix,     // matrix to translate
                   [-0.0, 0.0, -6.0]);  // amount to translate

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute
    {
        const numComponents = 3;  // pull out 3 values per iteration
        const type = gl.FLOAT;    // the data in the buffer is 32bit floats
        const normalize = false;  // don't normalize
        const stride = 0;         // how many bytes to get from one set of values to the next
                                  // 0 = use type and numComponents above
        const offset = 0;         // how many bytes inside the buffer to start from
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            numComponents,
            type,
            normalize,
            stride,
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexPosition);
    }

    // Tell WebGL to use our program when drawing
    gl.useProgram(programInfo.program);

    // Set the shader uniforms
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);

    {
        const vertexCount = 36;  // 6 faces * 2 triangles * 3 vertices each
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;        // start at the beginning of the indices buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }

    // Update the rotation for the next draw
    cubeRotation += deltaTime;
}


// Render the scene
function render() {
drawScene(gl, programInfo, buffers);
// Update the cube's rotation for the next draw
// You would also update the modelViewMatrix here if the cube's size changes
// This would typically be done with a call to mat4.scale()

requestAnimationFrame(render);
}

// Render the scene
function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, deltaTime);

    requestAnimationFrame(render);
}
let then = 0;
requestAnimationFrame(render);
