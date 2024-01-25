from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

def send_visualization_data(visualization_data):
    # Convert your visualization data to a JSON-serializable format if necessary
    # For example, if it's an image, you might convert it to a base64 string

    # Get the channel layer
    channel_layer = get_channel_layer()

    # Send the data to the group
    async_to_sync(channel_layer.group_send)(
        'visualization_group',  # Group name
        {
            'type': 'send_visualization_to_client',  # This matches the method name in the consumer
            'visualization_data': visualization_data
        }
    )
