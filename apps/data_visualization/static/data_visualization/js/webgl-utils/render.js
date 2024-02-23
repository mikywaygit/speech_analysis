import * as mat4 from 'gl-matrix/mat4';

export function drawScene(gl, programInfo, buffers, projectionMatrix, modelViewMatrix) {
    if (!gl) {
        console.error('WebGL context is not available.');
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things

    // Clear the canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    if (!buffers.position) {
        console.error('Position buffer is not available.');
    }
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    if (!buffers.indices) {
        console.error('Index buffer is not available.');
    }

    // Error checking for shader program uniform locations
    if (!programInfo.uniformLocations.projectionMatrix || !programInfo.uniformLocations.modelViewMatrix) {
        console.error('Shader program uniform location is not available.');
    }

    mat4.perspective(projectionMatrix, 45 * Math.PI / 180,
                     gl.canvas.clientWidth / gl.canvas.clientHeight,
                     0.1,
                     100.0);
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
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
