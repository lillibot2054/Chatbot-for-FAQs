from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS to fix cross-origin issues

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample FAQ data
faq_data = {
    "What is this chatbot about?": "This chatbot is designed to answer frequently asked questions using AI and NLP techniques.",
    "How does this chatbot work?": "It uses Natural Language Processing (NLP) to understand your questions and provide relevant answers.",
    "Hi": "Hii, I am doing good , How are you , Do u have anything to ask me??",
    "Who developed this chatbot?": "This chatbot was developed as part of an AI-powered FAQ project.",
    "What technologies are used?": "The chatbot is built using Flask for the backend, JavaScript for the frontend, and NLP for processing questions.",
    "Can I add more questions?": "Yes, you can extend the FAQ dataset to include more predefined questions and answers."
}

@app.route('/ask', methods=['POST'])
def ask():
    try:
        data = request.get_json()
        question = data.get("question", "").strip()

        if not question:
            return jsonify({"error": "No question provided"}), 400

        # Fetch answer from FAQ dataset
        answer = faq_data.get(question, "Sorry, I don't have an answer for that question.")
        
        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
