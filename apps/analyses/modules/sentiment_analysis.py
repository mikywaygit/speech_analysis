from nltk.sentiment import SentimentIntensityAnalyzer


class SentimentAnalysis:
    def __init__(self):
        self.analyzer = SentimentIntensityAnalyzer()

    def analyze(self, text):
        return self.analyzer.polarity_scores(text)
