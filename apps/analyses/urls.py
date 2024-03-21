from django.urls import path
from .views import sentiment_analysis, analyze_text


urlpatterns = [
    path('sentiment/', sentiment_analysis, name='sentiment_analysis'),
    path('analyze_text/', analyze_text, name='analyze_text'),
]
