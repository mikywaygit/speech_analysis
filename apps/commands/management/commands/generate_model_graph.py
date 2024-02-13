import ast
import pygraphviz as pgv
from django.core.management.base import BaseCommand
from django.apps import apps
import inspect

class CodeAnalyzer(ast.NodeVisitor):
    def __init__(self, graph):
        self.graph = graph
        self.current_function = None

    def visit_FunctionDef(self, node):
        function_name = node.name
        self.graph.add_node(function_name)
        self.current_function = function_name
        self.generic_visit(node)

    def visit_Call(self, node):
        if hasattr(node.func, 'id'):
            called_function_name = node.func.id
            if self.current_function:
                self.graph.add_edge(self.current_function, called_function_name)
        self.generic_visit(node)

    def visit_ClassDef(self, node):
        class_name = node.name
        self.graph.add_node(class_name)
        self.current_function = class_name
        self.generic_visit(node)


class Command(BaseCommand):
    help = 'Generate a graphical representation of the interactions in the project'

    def handle(self, *args, **options):
        graph = pgv.AGraph(strict=False, directed=True)
        graph.graph_attr.update({
            'size': '15,15!',
            'ratio': 'fill',
            'splines': 'true',
            'overlap': 'false',
        })
        analyzer = CodeAnalyzer(graph)

        for app in apps.get_app_configs():
            subgraph = graph.add_subgraph(name=f'cluster_{app.label}', label=app.label)
            for model in app.get_models():
                for attr_name in dir(model):
                    attr = getattr(model, attr_name)
                    if callable(attr) and hasattr(attr, '__code__'):
                        if not hasattr(attr.__code__, 'co_filename'):
                            continue
                        try:
                            source_code = inspect.getsource(attr)
                            parsed_code = ast.parse(source_code)
                            analyzer.visit(parsed_code)
                        except Exception as e:
                            self.stdout.write(self.style.WARNING(f'Could not parse code for {attr_name}: {e}'))
                    # Add model to subgraph
                    subgraph.add_node(model._meta.object_name)

        graph.layout(prog='dot')
        graph.draw('interaction_graph.png', format='png')
        self.stdout.write(self.style.SUCCESS('Successfully created the interaction graph.'))
