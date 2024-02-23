// Assuming mat4 and other necessary components are imported or defined elsewhere
import * as mat4 from 'gl-matrix/mat4';

export function drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix) {
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

export function render(gl, programInfo, buffers, then) {
    // Animation loop
    requestAnimationFrame(function(now) {
        now *= 0.001; // convert time to seconds

        // Calculate the time difference since the last frame
        const deltaTime = now - then.value;
        then.value = now;

        // Prepare the projection and model view matrices
        const projectionMatrix = mat4.create();
        const modelViewMatrix = mat4.create();

        // Draw the scene
        drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix);

        // Update the rotation for the next draw, if necessary

        // Request to render the next frame
        requestAnimationFrame(render);
    });
}
