document.addEventListener('DOMContentLoaded', function() {
    const wsScheme = window.location.protocol === "https:" ? "wss" : "ws";
    const webSocket = new WebSocket(`${wsScheme}://${window.location.host}/ws/user_input/`);

    webSocket.onopen = function(event) {
        console.log("Connected to the WebSocket server.");
        document.getElementById('status-message').textContent = 'Connected to the server.';
    };

    webSocket.onmessage = function(event) {
        const data = JSON.parse(event.data);
        console.log("Received data from the server:", data);
        document.getElementById('results-placeholder').textContent = data.result;
        document.getElementById('status-message').textContent = '';
    };

    webSocket.onerror = function(error) {
        console.error("WebSocket error:", error);
        document.getElementById('status-message').textContent = 'Error with WebSocket.';
    };

    webSocket.onclose = function(event) {
        console.log("WebSocket connection closed:", event);
        document.getElementById('status-message').textContent = 'WebSocket connection closed.';
    };

    const analyzeButton = document.getElementById('analyze-button');
    analyzeButton.addEventListener('click', function() {
        const textInput = document.getElementById('text-input').value;
        document.getElementById('status-message').textContent = 'Sending data for analysis...';
        webSocket.send(JSON.stringify({'message': textInput}));
        console.log('Data sent to the server:', textInput);
    });
});
