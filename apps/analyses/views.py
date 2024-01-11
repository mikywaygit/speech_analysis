from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .modules.sentiment_analysis import SentimentAnalysis
import logging


logger = logging.getLogger(__name__)

def custom_404_view(request, exception):
    logger.error(f"404 error: {exception}, Path: {request.path}")
    return render(request, '404.html', {}, status=404)


@require_http_methods(["POST"])
def sentiment_analysis_view(request):
    text = request.POST.get('text', '')
    if text:
        sentiment_analyzer = SentimentAnalysis()
        result = sentiment_analyzer.analyze(text)
        return JsonResponse(result)
    else:
        return JsonResponse({'error': 'No text provided'}, status=400)



