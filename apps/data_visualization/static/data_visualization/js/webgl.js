// This function will initialize the WebGL context
function initWebGL(canvas) {
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser may not support it.');
        return null;
    }
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Enable depth testing
    gl.enable(gl.DEPTH_TEST);
    // Near things obscure far things
    gl.depthFunc(gl.LEQUAL);
    // Clear the color as well as the depth buffer.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    return gl;
}

// This function will compile shader code
function compileShader(gl, shaderSource, shaderType) {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    // Check if compilation was successful
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

// This function will create and link the shader program
function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = compileShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // Check if linking was successful
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;
}

// This function will start the rendering loop
function startRenderingLoop(renderFunction) {
    function render() {
        renderFunction();
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// Main entry point for setting up WebGL
function main() {
    const canvas = document.getElementById('webgl-canvas'); // Ensure your HTML has a canvas with this id
    const gl = initWebGL(canvas); // Initialize WebGL
    if (!gl) {
        return;
    }

    // Define shader sources
    const vsSource = ''; // Fetch or define your vertex shader source code here
    const fsSource = ''; // Fetch or define your fragment shader source code here

    // Initialize shader program
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    // Setup necessary WebGL state for drawing, bind buffers, etc.
    // ...

    // Define the function that will handle rendering each frame
    const renderFunction = () => {
        drawScene(gl, shaderProgram); // Placeholder for your draw scene function
    };

    // Start the rendering loop
    startRenderingLoop(renderFunction);
}

// Placeholder function for drawing the scene
function drawScene(gl, shaderProgram) {
    // Clear the canvas before we start drawing on it
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Set up the camera, draw the objects, etc.
    // ...
}

// Load the main function when the window finishes loading
window.onload = main;