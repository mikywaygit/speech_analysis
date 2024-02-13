from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .modules.sentiment_analysis import SentimentAnalysis
import logging

logger = logging.getLogger(__name__)


def custom_404_view(request, exception):
    logger.error(f"404 error: {exception}, Path: {request.path}")
    return render(request, '404.html', {}, status=404)


def sentiment_analysis(text):
    if text:
        sentiment_analyzer = SentimentAnalysis()
        result = sentiment_analyzer.analyze(text)
        return result
    else:
        return {'error': 'No text provided'}
