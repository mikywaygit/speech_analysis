from django.shortcuts import render
from .forms import TextInputForm


def show_text_input_form(request):
    form = TextInputForm()
    return render(request, 'text_input_form.html', {'form': form})
