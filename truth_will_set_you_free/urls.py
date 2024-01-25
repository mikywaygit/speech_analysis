from django.contrib import admin
from django.urls import include, path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('analyses/', include('apps.analyses.urls')),
    path('', views.home, name='home'),
    path('frontend/', include('apps.frontend.urls')),
    path('user_inputs/', include(('apps.user_inputs.urls', 'user_inputs'), namespace='user_inputs')),
    # Removed the line for WebSocket route
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
