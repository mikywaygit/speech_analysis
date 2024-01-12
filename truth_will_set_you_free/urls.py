from django.contrib import admin
from django.urls import include, path
from . import views
from django.urls import re_path
from websockets import consumers


urlpatterns = [
    path('admin/', admin.site.urls),
    path('analyses/', include('apps.analyses.urls')),
    path('', views.home, name='home'),
    path('frontend/', include('apps.frontend.urls')),
    path('user_inputs/', include(('apps.user_inputs.urls', 'user_inputs'), namespace='user_inputs')),
    re_path(r'ws/some_path/$', consumers.ChatConsumer.as_asgi()),
]
