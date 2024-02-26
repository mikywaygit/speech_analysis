import { mat4 } from 'gl-matrix';

export function drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix) {
    if (!gl) {
        console.error('WebGL context is not available.');
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0);                // Clear everything
    gl.enable(gl.DEPTH_TEST);          // Enable depth testing
    gl.depthFunc(gl.LEQUAL);           // Near things obscure far things

    // Clear the canvas before rendering
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Use the shader program before setting uniforms and drawing
    gl.useProgram(programInfo.program);

    // Check if the position buffer is available before binding
    if (!buffers.position) {
        console.error('Position buffer is not available.');
        return; // Stop execution if buffer is unavailable
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    // Check if the index buffer is available before binding
    if (!buffers.indices) {
        console.error('Index buffer is not available.');
        return; // Stop execution if buffer is unavailable
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Set the shader uniforms for projection and model-view matrices
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    // Draw the object using elements
    gl.drawElements(gl.TRIANGLES, buffers.numVertices, gl.UNSIGNED_SHORT, 0);
}

export function render(gl, programInfo, buffers, then) {
    requestAnimationFrame(function(now) {
        if (!now) {
            console.error('RequestAnimationFrame did not provide a timestamp.');
            return;
        }

        now *= 0.001; // convert time to seconds
        const deltaTime = now - then.value; // Calculate the time difference since the last frame
        then.value = now;

        const projectionMatrix = mat4.create();
        const modelViewMatrix = mat4.create();

        if (!projectionMatrix || !modelViewMatrix) {
            console.error('Failed to create matrix.');
            return;
        }

        drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix);

        requestAnimationFrame(render.bind(null, gl, programInfo, buffers, then));
    });
}
