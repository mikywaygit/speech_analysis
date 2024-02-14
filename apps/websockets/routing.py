from django.urls import re_path
from .consumers.data_visualization_consumer import DataVisualizationConsumer
from .consumers.user_input_consumer import UserTextInputConsumer
from channels.routing import ProtocolTypeRouter, URLRouter

websocket_urlpatterns = [
    re_path(r'ws/user_input/', UserTextInputConsumer.as_asgi()),
    re_path(r'ws/data_visualization/', DataVisualizationConsumer.as_asgi()),
    re_path(r'ws/sentiment_analysis/', UserTextInputConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': URLRouter(
        websocket_urlpatterns
    ),
})
