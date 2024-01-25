import json
import logging
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from apps.analyses.tasks import perform_analysis  # Ensure this is the correct path to your Celery task

logger = logging.getLogger(__name__)

class UserTextInputConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.group_name = 'sentiment_analysis_group'
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

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        logger.info(f"Received message from client: {message}")

        # Acknowledge the receipt of the message
        await self.send(text_data=json.dumps({
            'type': 'ack',
            'message': 'Data received'
        }))
        logger.info("Sent acknowledgment to client")

        # Call the perform_analysis task with .delay to run it asynchronously
        perform_analysis.delay(message, analysis_type='sentiment', group_name=self.group_name)

    # This is a handler for receiving a message from the Celery task
    async def send_analysis_result(self, event):
        # Send the analysis result to the WebSocket
        message = event['message']
        await self.send(text_data=json.dumps(message))
        logger.info(f"Sent analysis result to client: {message}")
