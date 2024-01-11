from django.urls import path
from .views import sentiment_analysis_view

urlpatterns = [
    path('sentiment/', sentiment_analysis_view, name='sentiment_analysis'),
]
