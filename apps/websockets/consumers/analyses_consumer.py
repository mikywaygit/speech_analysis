import json
import logging
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from apps.analyses.tasks import perform_analysis  # Ensure this is the correct path to your Celery task

logger = logging.getLogger(__name__)


class UserTextInputConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.group_name = 'user_text_input'
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        await self.accept()
        logger.info(f"WebSocket connected, channel name: {self.channel_name}")

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )
        logger.info(f"WebSocket disconnected, channel name: {self.channel_name}, close code: {close_code}")

    async def receive(self, text_data=None, bytes_data=None):
        # Handle receiving of text data from the WebSocket
        text_data_json = json.loads(text_data)
        message = text_data_json['message']  # Extract the message from the received JSON
        logger.info(f"Received message from client: {message}")

        # Acknowledge the receipt of the message to the client
        await self.send(text_data=json.dumps({
            'type': 'ack',
            'message': 'Data received'
        }))
        logger.info("Sent acknowledgment to client")

        # Trigger the Celery task with the received message
        # Assuming perform_analysis.delay is defined elsewhere to enqueue the task.
        perform_analysis.delay(message)
