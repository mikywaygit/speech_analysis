from celery import shared_task
from .utils import generate_visualization  # Assume this function creates your visualization and returns it in base64 format.
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync


@shared_task
def create_and_send_visualization(data, group_name):
    visualization_data = generate_visualization(data)
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        group_name,
        {
            'type': 'send.visualization.to.client',
            'visualization_data': visualization_data,
        }
    )
