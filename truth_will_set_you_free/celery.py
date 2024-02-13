from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.conf import settings

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'truth_will_set_you_free.settings')

app = Celery('truth_will_set_you_free')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Manually import the specific task
from apps.analyses.tasks import perform_analysis

# No need to call autodiscover_tasks if you're manually importing tasks
