import matplotlib.pyplot as plt
from .websocket_utils import send_visualization_data
from io import BytesIO
import base64


class BaseVisualization:
    def __init__(self, data):
        self.data = data
        self.style = {'font.size': 12, 'figure.figsize': (10, 6)}

    def apply_style(self):
        plt.style.use(self.style)

    def render(self):
        self.apply_style()
        raise NotImplementedError

    def save(self, path):
        plt.savefig(path)

    def show(self):
        plt.show()


class MyBarChartVisualization(BaseVisualization):
    def render(self):
        # Implementation of a specific visualization, e.g., a bar chart
        self.apply_style()
        plt.bar(range(len(self.data)), self.data)
        plt.xlabel('X-axis label')
        plt.ylabel('Y-axis label')
        plt.title('Bar Chart')

    def get_image_base64(self):
        # Save the plot to a BytesIO object and encode it as base64
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        image_png = buffer.getvalue()
        buffer.close()
        return base64.b64encode(image_png).decode('utf-8')

    def send_to_client(self):
        # Send the visualization data to the consumer
        base64_image = self.get_image_base64()
        send_visualization_data(base64_image)
