from django.db import models

class TextAnalysis(models.Model):
    original_text = models.TextField()
    analyzed_text = models.TextField(blank=True)
    analysis_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.original_text[:50]
