from django.db import models


class UserInput(models.Model):
    text_input = models.TextField()
