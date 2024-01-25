from celery import shared_task
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from .views import sentiment_analysis  # This imports your analysis function


@shared_task
def perform_analysis(text, analysis_type, group_name):
    result = sentiment_analysis(text)  # Perform the analysis
    channel_layer = get_channel_layer()

    # Send the result back to the group
    async_to_sync(channel_layer.group_send)(
        group_name,
        {
            'type': 'send_analysis_result',  # This corresponds to the method in your consumer
            'message': {
                'analysis_type': analysis_type,
                'result': result,
            }
        }
    )
