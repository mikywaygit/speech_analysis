import nltk
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.tag import pos_tag
from nltk.chunk import ne_chunk

def analyze_text(text):
    # Tokenize the text into sentences
    sentences = sent_tokenize(text)
    print("Sentences:")
    print(sentences)

    # Tokenize and tag each sentence
    for sentence in sentences:
        words = word_tokenize(sentence)
        tagged_words = pos_tag(words)
        print("\nTagged Words:")
        print(tagged_words)

        # Named Entity Recognition
        named_entities = ne_chunk(tagged_words)
        print("\nNamed Entities:")
        print(named_entities)

# Example text
text = "London is the capital of England. It's known for its rich history and landmarks like the Big Ben and the London Eye."
analyze_text(text)
