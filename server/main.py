from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(
    app,
    origins="*",
)


@app.route("/api/user", methods=["GET"])
def user():
    return jsonify({"users": ["Enock", "Amos", "Gideon"]})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
