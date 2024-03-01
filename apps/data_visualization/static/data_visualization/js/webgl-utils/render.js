import { mat4 } from 'gl-matrix';

export function drawScene(gl, programInfo, buffers, rotationAngles) {
    if (!gl) {
        console.error('WebGL context is not available.');
        return;
    }

    gl.clearColor(0.5, 0.5, 0.5, 1.0); // Set clear color to gray, fully opaque
    gl.clearDepth(1.0);                // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix, a special matrix that is used to simulate the distortion of perspective in a camera.
    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    // note: glmatrix.js always has the first argument as the destination to receive the result.
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // Set the drawing position to the "identity" point, which is the center of the scene.
    const modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to start drawing the square.
    mat4.translate(modelViewMatrix,     // destination matrix
                   modelViewMatrix,     // matrix to translate
                   [-0.0, 0.0, -6.0]);  // amount to translate

    // Rotate the modelView matrix using the rotation angles defined by mouse movement
    mat4.rotate(modelViewMatrix,  // destination matrix
                modelViewMatrix,  // matrix to rotate
                rotationAngles.x,     // amount to rotate in radians
                [1, 0, 0]);       // axis to rotate around (X)
    mat4.rotate(modelViewMatrix,  // destination matrix
                modelViewMatrix,  // matrix to rotate
                rotationAngles.y,     // amount to rotate in radians
                [0, 1, 0]);       // axis to rotate around (Y)
    if (rotationAngles.z !== undefined) {
        mat4.rotate(modelViewMatrix,  // destination matrix
                    modelViewMatrix,  // matrix to rotate
                    rotationAngles.z,     // amount to rotate in radians
                    [0, 0, 1]);       // axis to rotate around (Z)
    }

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute.
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
        const vertexCount = 36;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }

    // Update the color to draw the edges if needed
    gl.uniform4f(programInfo.uniformLocations.uColor, 0.0, 0.0, 0.0, 1.0); // Set the color to black
    gl.drawElements(gl.LINES, buffers.edgeCount, gl.UNSIGNED_SHORT, 0); // Draw cube edges
}

export function render(gl, programInfo, buffers, rotationAngles) {
    requestAnimationFrame(function(time) {
        // Here 'time' parameter is provided by requestAnimationFrame
        // which could be used for animation purposes

        drawScene(gl, programInfo, buffers, rotationAngles);

        // Loop the render function call
        requestAnimationFrame(render.bind(null, gl, programInfo, buffers, rotationAngles));
    });
}
