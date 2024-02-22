// js/webgl-utils/render.js
export function drawScene(gl, programInfo, buffers) {
    // Clearing the scene, setting up viewport, etc.
}

export function startRenderLoop(gl, programInfo, buffers) {
    let lastTime = 0;
    function render(now) {
        now *= 0.001;  // Convert to seconds
        const deltaTime = now - lastTime;
        lastTime = now;

        drawScene(gl, programInfo, buffers);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
