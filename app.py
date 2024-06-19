from flask import Flask, render_template, request
import requests

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.form["message"]
    # Chiamata all'API esterna per ottenere la risposta
    response = requests.post("API_URL", json={"message": user_message})
    bot_response = response.json()["response"]
    # Salvataggio della conversazione nel database (da implementare)
    return {"user_message": user_message, "bot_response": bot_response}


if __name__ == "__main__":
    app.run()
