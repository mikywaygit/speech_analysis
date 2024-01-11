from django import forms
from apps.user_inputs.models import UserInput

class TextInputForm(forms.ModelForm):
    class Meta:
        model = UserInput
        fields = ['text_input']