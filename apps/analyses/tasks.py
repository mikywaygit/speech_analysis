from celery import shared_task
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from .views import sentiment_analysis  # This imports your analysis function


@shared_task
def perform_analysis(message):
    print(message)
    # Call the sentiment_analysis function from views.py
    result = sentiment_analysis(message)
    print(result)
