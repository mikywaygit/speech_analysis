from django.shortcuts import render


# If you're planning to pass additional data to your template, you might
# import models or other components here. For example:
# from .models import VisualizationData

def index(request):
    """Serve the main visualization page with optional context data."""
    # Example of fetching data from a model to pass to the template.
    # data_items = VisualizationData.objects.all()

    # Preparing the context dictionary to pass any data you need.
    # For starting, it might be empty or include static configurations.
    context = {
        'page_title': 'WebGL Visualization',
        # 'data_items': data_items,  # Uncomment if you're passing model data
    }

    return render(request, 'data_visualization/index.html', context)
