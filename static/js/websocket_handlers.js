// Establishes the WebSocket connection and defines event handlers
function setupWebSocket() {
    const wsScheme = window.location.protocol === "https:" ? "wss" : "ws";
    const webSocket = new WebSocket(`${wsScheme}://${window.location.host}/ws/user_input/`);

    webSocket.onopen = function(event) {
        console.log("Connected to the WebSocket server.");
        updateStatusMessage('Connected to the server.');
    };

    webSocket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    console.log(data); // Add this line to log the data received
    handleServerMessage(data);
    };

    webSocket.onerror = function(error) {
        console.error("WebSocket error:", error);
        updateStatusMessage('Error with WebSocket.');
    };

    webSocket.onclose = function(event) {
        console.log("WebSocket connection closed:", event);
        updateStatusMessage('WebSocket connection closed.');
    };

    return webSocket;
}

// Sends user input to the server via WebSocket
function sendUserInput(webSocket, input) {
    updateStatusMessage('Sending data for analysis...');
    webSocket.send(JSON.stringify({ message: input }));
    console.log('Data sent to the server:', input);
}

// Handles messages received from the server
function handleServerMessage(data) {
    if (data.type === 'result') {
        // Updated to target the new ID for text results
        updateAnalysisResultsContainer(data.result);
    } else if (data.type === 'visualization') {
        // Handle visualization data - update to target the new ID for visualization image
        updateVisualizationImage(data.data);
    } else {
        console.log("Received unknown message type from the server.");
    }
    updateStatusMessage('');
}

// Updates the status message on the page
function updateStatusMessage(message) {
    document.getElementById('status-message').textContent = message;
}

// Updates the analysis results container with text analysis results
function updateAnalysisResultsContainer(results) {
    document.getElementById('analysis-results-container').textContent = results;
}

// Updates the visualization image with an image
function updateVisualizationImage(imageData) {
    const visualizationImage = document.getElementById('visualization-image');
    visualizationImage.src = 'data:image/png;base64,' + imageData;
    visualizationImage.style.display = 'block';  // Make the image visible
}

document.addEventListener('DOMContentLoaded', function() {
    const webSocket = setupWebSocket();

    const analyzeButton = document.getElementById('analyze-button');
    analyzeButton.addEventListener('click', function() {
        const textInput = document.getElementById('text-input').value.trim();
        if (textInput) {
            sendUserInput(webSocket, textInput);
        } else {
            updateStatusMessage('Please enter some text for analysis.');
        }
    });
});
