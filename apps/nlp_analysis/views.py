from django.shortcuts import render, redirect
from .forms import TextForm
from .models import TextAnalysis
import spacy

def analyze_text(request):
    if request.method == "POST":
        form = TextForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['text']
            nlp = spacy.load("en_core_web_sm")
            doc = nlp(text)
            tokens_pos = [(token.text, token.pos_) for token in doc]
            analyzed_text = ", ".join([f"{t[0]} ({t[1]})" for t in tokens_pos])
            analysis = TextAnalysis(original_text=text, analyzed_text=analyzed_text)
            analysis.save()
            return render(request, "nlp_analysis/results.html", {"analysis": analysis})
    else:
        form = TextForm()
    return render(request, "nlp_analysis/index.html", {"form": form})
