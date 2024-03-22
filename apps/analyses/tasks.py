# apps/analyses/tasks.py
from celery import shared_task

@shared_task
def perform_analysis(message):
    from .views import sentiment_analysis
    # Use sentiment_analysis here
