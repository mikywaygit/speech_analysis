import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'truth_will_set_you_free.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),  # Standard Django ASGI application for HTTP traffic
    "websocket": AuthMiddlewareStack(
        # URLRouter looks up the channel layer configuration to route a WebSocket connection
        URLRouter(
            websockets.routing.websocket_urlpatterns  # The WebSocket URL patterns
        )
    ),
})
