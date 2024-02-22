#!/bin/bash
# ./start_services_script.sh

# Checking and starting Redis
echo "Checking Redis..."
REDIS_PING=$(redis-cli ping)
if [ "$REDIS_PING" = "PONG" ]; then
    echo "Redis is already running."
else
    echo "Starting Redis..."
    nohup redis-server > redis.log 2>&1 &
    sleep 2 # Wait for Redis to initialize
    echo "Redis started."
fi

# Starting Celery worker for Django app
echo "Starting Celery worker..."
cd /home/jan/PycharmProjects/truth_will_set_you_free
nohup celery -A truth_will_set_you_free worker --loglevel=info > celery.log 2>&1 &

# Ensuring MongoDB is running for Graylog
echo "Ensuring MongoDB is running..."
sudo systemctl start mongod

# Starting Django Channels (WebSockets) with Uvicorn
echo "Starting Django Channels with Uvicorn on port 8000..."
nohup uvicorn truth_will_set_you_free.asgi:application --port 8000 --reload > uvicorn.log 2>&1 &

# Building assets with Webpack
echo "Building assets with Webpack..."
npm run build

echo "All services are starting..."

# Opening a new private window of Google Chrome
echo "Opening a new private window of Google Chrome at http://127.0.0.1:8000/..."
nohup google-chrome --incognito http://127.0.0.1:8000/data_visualization/ > chrome.log 2>&1 &
