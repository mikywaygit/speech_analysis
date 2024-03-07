export function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const shaderType = type === gl.VERTEX_SHADER ? 'VERTEX_SHADER' : 'FRAGMENT_SHADER';
        console.error(`An error occurred compiling the ${shaderType}: ${gl.getShaderInfoLog(shader)}`);
        console.error(`Shader source that failed to compile:\n${source}`);
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

export function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

// Vertex shader program updated for vertex color attribute
export const vsSource = `
    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor; // New attribute for vertex colors
    varying lowp vec4 vColor; // Pass color to the fragment shader

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main(void) {
        gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor; // Pass the color through
    }
`;

// Fragment shader program updated to use passed color instead of a uniform
export const fsSource = `
    precision mediump float;
    varying lowp vec4 vColor; // Received from vertex shader

    void main(void) {
        gl_FragColor = vColor; // Use the passed color
    }
`;
