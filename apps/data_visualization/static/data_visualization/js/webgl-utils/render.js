import { mat4 } from 'gl-matrix';

export function drawScene(gl, programInfo, buffers, rotationAngles) {
    if (!gl) {
        console.error('WebGL context is not available.');
        return;
    }

    gl.clearColor(0.5, 0.5, 0.5, 1.0); // Change to a gray background for visibility
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Set up the perspective projection matrix
    const fieldOfView = 45 * Math.PI / 180; // radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // Set up the model-view matrix with translation and rotation for 3D view
    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);
    let angleY = 45 * Math.PI / 180;
    let angleX = 35 * Math.PI / 180;
    mat4.rotate(modelViewMatrix, modelViewMatrix, angleY, [0, 1, 0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, angleX, [1, 0, 0]);

    gl.useProgram(programInfo.program);
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    // Set color to white for drawing the cube faces
    gl.uniform4f(programInfo.uniformLocations.uColor, 1.0, 1.0, 1.0, 1.0);

    // Draw the cube with filled triangles
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

    // Change color to black and draw cube edges
    gl.uniform4f(programInfo.uniformLocations.uColor, 0.0, 0.0, 0.0, 1.0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.edgeIndices);
    gl.drawElements(gl.LINES, buffers.edgeCount, gl.UNSIGNED_SHORT, 0); // Ensure buffers.edgeCount is correctly set
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
