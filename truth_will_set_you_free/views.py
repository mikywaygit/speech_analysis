from django.shortcuts import render
from apps.user_inputs.forms import TextInputForm


def home(request):
    # Render a template or return a response
    return render(request, 'home.html')
