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

// Vertex shader program remains unchanged
export const vsSource = `
    attribute vec3 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main(void) {
        gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
    }
`;

// Fragment shader program updated to set the color to red
export const fsSource = `
    precision mediump float;
    uniform vec4 uColor; // Add this uniform for dynamic color control

    void main(void) {
        gl_FragColor = uColor; // Use the uniform color
    }
`;

