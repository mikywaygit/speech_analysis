Speech Analysis Tool

Welcome to the Speech Analysis Tool, an innovative application designed to provide in-depth analysis of speech patterns. It analyzes syntax and showcases connections within speech in a captivating 3D graphical interface.
Features

    Speech Analysis: Employs sophisticated algorithms for comprehensive syntax analysis.
    3D Visualization: Connections in syntax are vividly displayed through WebGL, offering a three-dimensional interactive experience.
    Asynchronous Processing: Utilizes Celery and Websockets for efficient, real-time data handling.
    Database Integration: Incorporates both MongoDB and SQL databases for robust data management.

Technologies Used

    Backend: Python, Django
    Frontend: JavaScript, WebGL
    Asynchronous Technologies: Celery, Websockets
    Databases: MongoDB, SQL

Getting Started

Follow these instructions to get the project up and running on your local environment for development and testing purposes.
Prerequisites

    Python 3.x
    Django
    MongoDB
    Node.js
    Redis

Installation

Clone the repository from GitHub:

bash

git clone https://github.com/mikywaygit/speech_analysis.git

Install the required Python dependencies:

bash

pip install -r requirements.txt

To start MongoDB, Redis, and other services, simply run:

bash

./start_services_script.sh

Run the Celery worker:

bash

celery -A speech_analysis worker --loglevel=info

Start the Django development server:

bash

python manage.py runserver

Open your web browser and navigate to http://localhost:8000 to explore the application.
Usage

Through the web interface, record or upload a speech file. Submit the file for analysis to see the breakdown of syntax connections. Interact with the 3D graphical representation to explore different syntactic structures.
Contributing

Please refer to CONTRIBUTING.md for information on contributing to the project, including our code of conduct and the process for submitting pull requests.
License

This project is licensed under the MIT License - see the LICENSE.md file for full details.