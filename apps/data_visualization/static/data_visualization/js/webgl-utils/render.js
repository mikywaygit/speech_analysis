import { mat4 } from 'gl-matrix';

export function drawScene(gl, programInfo, buffers, rotationMatrix) { // Change from rotationAngles to rotationMatrix
    if (!gl) {
        console.error('WebGL context is not available.');
        return;
    }

    gl.clearColor(0.5, 0.5, 0.5, 1.0); // Set clear color to gray, fully opaque
    gl.clearDepth(1.0);                // Clear everything
    gl.enable(gl.DEPTH_TEST);          // Enable depth testing
    gl.depthFunc(gl.LEQUAL);           // Near things obscure far things

    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix, a special matrix that is used to simulate the distortion of perspective in a camera.
    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // Set the drawing position to the "identity" point, which is the center of the scene.
    const modelViewMatrix = mat4.create(); // This now acts as the initial, untranslated model-view matrix

    // Now move the drawing position a bit to where we want to start drawing the square.
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);  // amount to translate

    // Apply the rotation matrix directly, which is calculated and passed from the updated interaction logic.
    mat4.multiply(modelViewMatrix, modelViewMatrix, rotationMatrix); // Apply the rotation matrix to the modelViewMatrix

    // Setup for drawing the object
    // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute and other setup...
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    // Tell WebGL to use our program when drawing
    gl.useProgram(programInfo.program);

    // Set the shader uniforms
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    // Draw the object
    const vertexCount = 36;
    const typeIndices = gl.UNSIGNED_SHORT;
    const offsetIndices = 0;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    gl.drawElements(gl.TRIANGLES, vertexCount, typeIndices, offsetIndices);

    // Update the color to draw the edges if needed
    gl.uniform4f(programInfo.uniformLocations.uColor, 0.0, 0.0, 0.0, 1.0); // Set the color to black
    gl.drawElements(gl.LINES, buffers.edgeCount, gl.UNSIGNED_SHORT, 0); // Draw cube edges
}

export function render(gl, programInfo, buffers, rotationMatrix) { // Change from rotationAngles to rotationMatrix
    requestAnimationFrame(function(time) {
        drawScene(gl, programInfo, buffers, rotationMatrix);
        requestAnimationFrame(render.bind(null, gl, programInfo, buffers, rotationMatrix));
    });
}
