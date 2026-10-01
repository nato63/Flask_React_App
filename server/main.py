from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow cross-origin requests from any domain

dictionary = {
    "apple": "A round fruit with red or green skin.",
    "banana": "A long curved fruit with yellow skin.",
    "cat": "A small domesticated carnivorous mammal.",
    "dog": "A domesticated carnivorous mammal.",
}


# Define a route for the home page
@app.route("/")
def home():
    return jsonify({"message": "Flask server is running!"})


# NEW ROUTE: get a definition for a word
@app.route("/api/define/<word>", methods=["GET"])
def define(word):
    definition = dictionary.get(word.lower())
    if definition:
        return jsonify({"word": word, "definition": definition})
    else:
        return jsonify({"error": f"'{word}' not found"}), 404


if __name__ == "__main__":
    app.run(debug=True, port=8080)
