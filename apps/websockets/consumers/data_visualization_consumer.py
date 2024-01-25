import json
import logging
from channels.generic.websocket import AsyncWebsocketConsumer
from apps.analyses.views import sentiment_analysis


logger = logging.getLogger(__name__)


class DataVisualizationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # This could be a specific group for users awaiting visualizations
        self.group_name = 'visualization_group'

        # Join the visualization group
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        # Accept the WebSocket connection
        await self.accept()

    async def disconnect(self, close_code):
        # Leave the visualization group when disconnecting
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def send_visualization_to_client(self, event):
        """
        This method is called to send the visualization data to the client.
        Event should contain 'visualization_data'.
        """
        visualization_data = event['visualization_data']

        # Send the visualization data to the WebSocket
        await self.send(text_data=json.dumps({
            'type': 'visualization',
            'data': visualization_data
        }))
