from django.urls import path
from .consumers import GeneralConsumer

websocket_urlpatterns = [
    # Define the URL pattern for the WebSocket endpoint
    path('ws/general/', GeneralConsumer.as_asgi()),
]