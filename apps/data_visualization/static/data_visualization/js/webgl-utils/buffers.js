export function initBuffers(gl) {
    if (!gl) {
        console.error('WebGL context is not available.');
        return null;
    }

    // Buffer for the cube's vertices
    const positionBuffer = gl.createBuffer();
    if (!positionBuffer) {
        console.error('Failed to create a position buffer.');
        return null;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
        // Front face
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
        // Back face
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        // Top face
        -1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, -1.0,
        // Bottom face
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0, 1.0,
        -1.0, -1.0, 1.0,
        // Right face
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,
        // Left face
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, 1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Create a buffer for the cube's face indices
    const indexBuffer = gl.createBuffer();
    if (!indexBuffer) {
        console.error('Failed to create an index buffer.');
        return null;
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    const indices = [
        0, 1, 2, 0, 2, 3, // Front face
        4, 5, 6, 4, 6, 7, // Back face
        8, 9, 10, 8, 10, 11, // Top face
        12, 13, 14, 12, 14, 15, // Bottom face
        16, 17, 18, 16, 18, 19, // Right face
        20, 21, 22, 20, 22, 23, // Left face
    ];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Create a buffer for the cube's edge lines
    const edgeIndices = [
        // Each pair of vertices forms a line for an edge of the cube
        0, 1, 1, 2, 2, 3, 3, 0, // Front face edges
        4, 5, 5, 6, 6, 7, 7, 4, // Back face edges
        0, 4, 1, 5, 2, 6, 3, 7, // Connecting edges between front and back
        8, 9, 9, 10, 10, 11, 11, 8, // Top face edges
        12, 13, 13, 14, 14, 15, 15, 12, // Bottom face edges
        16, 17, 17, 18, 18, 19, 19, 16, // Right face edges
        20, 21, 21, 22, 22, 23, 23, 20, // Left face edges
    ];
    const edgeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, edgeBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(edgeIndices), gl.STATIC_DRAW);

    // Add edge count for drawing lines
    const edgeCount = edgeIndices.length / 2;

    return {
        position: positionBuffer,
        indices: indexBuffer,
        edgeIndices: edgeBuffer,
        edgeCount: edgeCount, // Add edgeCount here
    };
}