from django.urls import path
from .views import text_input

urlpatterns = [
    path('text/', text_input, name='text_input'),
]
