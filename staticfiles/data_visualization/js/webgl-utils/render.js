import { mat4 } from 'gl-matrix';

export function drawScene(gl, programInfo, buffers, rotationMatrix) {
    if (!gl) {
        console.error('WebGL context is not available.');
        return;
    }

    // Ensure correct shader program is active
    gl.useProgram(programInfo.program);

    // Setup the perspective matrix
    const fieldOfView = 45 * Math.PI / 180; // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // Setup the model-view matrix
    const modelViewMatrix = mat4.create(); // This acts as the initial, untranslated model-view matrix
    mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -6.0]); // Translate back
    mat4.multiply(modelViewMatrix, modelViewMatrix, rotationMatrix); // Apply rotation

    // Clear the canvas
    gl.clearColor(0.5, 0.5, 0.5, 1.0); // Set clear color to gray
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Setup for drawing the object
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    // Set the shader uniforms
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);
    gl.uniform4f(programInfo.uniformLocations.uColor, 0.0, 0.0, 0.0, 1.0); // Set color to black for edges

    // Draw the object
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    gl.drawElements(gl.TRIANGLES, buffers.indexCount, gl.UNSIGNED_SHORT, 0);

    // Optionally draw cube edges
    gl.drawElements(gl.LINES, buffers.edgeCount, gl.UNSIGNED_SHORT, 0);
}

export function render(gl, programInfo, buffers, rotationMatrix) {
    requestAnimationFrame(() => {
        drawScene(gl, programInfo, buffers, rotationMatrix);
        requestAnimationFrame(render.bind(null, gl, programInfo, buffers, rotationMatrix));
    });
}
