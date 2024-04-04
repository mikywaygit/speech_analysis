# Speech Analysis Tool

## Overview
Welcome to the Speech Analysis Tool, an innovative application designed to provide in-depth analysis of speech patterns. This tool employs sophisticated algorithms to analyze syntax and showcases connections within speech in a captivating 3D graphical interface.

## Features
- **Speech Analysis:** Utilizes advanced algorithms for comprehensive syntax analysis.
- **3D Visualization:** Displays connections in syntax through WebGL, offering a three-dimensional interactive experience.
- **Asynchronous Processing:** Employs Celery and Websockets for efficient, real-time data handling.
- **Database Integration:** Supports both MongoDB and SQL databases for robust data management.

## Technologies Used
- **Backend:** Python, Django
- **Frontend:** JavaScript, WebGL
- **Asynchronous Technologies:** Celery, Websockets
- **Databases:** MongoDB, SQL

## Getting Started
### Prerequisites
- Python 3.x
- Django
- MongoDB
- Node.js
- Redis

### Installation
Follow these instructions to set up the project locally for development and testing purposes.

```bash
# Clone the repository
git clone https://github.com/mikywaygit/speech_analysis.git

# Install Python dependencies
pip install -r requirements.txt

# Start MongoDB, Redis, and other services
./start_services_script.sh

# Run the Celery worker
celery -A speech_analysis worker --loglevel=info

# Start the Django development server
python manage.py runserver


## Usage

Through the web interface, you can record or upload a speech file. Submit the file for analysis to see the breakdown of syntax connections. Interact with the 3D graphical representation to explore different syntactic structures.

## Contributing

We welcome contributions to the Speech Analysis Tool! Please refer to `CONTRIBUTING.md` for guidelines on how to contribute to this project, including our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE.md` file for full details.

## Support

For support, please open an issue on GitHub or contact the project maintainers directly.

## FAQ

### Can I contribute to the algorithm development?

Contributions to all aspects of the project, including algorithm development, are welcome.

