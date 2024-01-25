import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from apps.websockets.routing import websocket_urlpatterns  # Import the websocket patterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'truth_will_set_you_free.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),  # Standard Django ASGI application for HTTP traffic
    "websocket": AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns  # Use the imported websocket patterns
        )
    ),
})
