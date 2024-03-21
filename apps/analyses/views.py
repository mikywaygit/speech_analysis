from django.shortcuts import render
from django.http import JsonResponse
from .forms import TextForm
from django.views.decorators.http import require_http_methods
from .modules.sentiment_analysis import SentimentAnalysis
from .modules.nlp_analysis import analyze_text as nlp_analyze_text

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


def analyze_text(request):
    if request.method == "POST":
        form = TextForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['text']
            nlp = spacy.load("en_core_web_sm")
            doc = nlp(text)
            tokens_pos = [(token.text, token.pos_) for token in doc]
            analyzed_text = ", ".join([f"{t[0]} ({t[1]})" for t in tokens_pos])

            # Save analysis results
            analysis = TextAnalysis(original_text=text, analyzed_text=analyzed_text)
            analysis.save()

            # Return JSON response
            return JsonResponse({'analysis': analyzed_text})

    # Handle non-POST requests or invalid form submissions
    return JsonResponse({'error': 'Invalid request'}, status=400)