from django.urls import path
from .views import show_text_input_form

urlpatterns = [
    path('submit-text/', show_text_input_form, name='submit_text_form'),
]
