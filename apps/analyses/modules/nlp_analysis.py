from django.http import JsonResponse
import spacy
from apps.analyses.forms import TextForm
from apps.analyses.models import TextAnalysis

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
