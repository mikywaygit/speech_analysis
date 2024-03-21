from django.apps import AppConfig

class AnalysisConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.analyses'

    def ready(self):
        # Safe place to import models and tasks
        from . import signals  # Example: if you have signals.py
        from .tasks import my_celery_task  # Example: importing a Celery task
