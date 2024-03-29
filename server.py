from flask import Flask, render_template, url_for
from pathlib import Path

app = Flask(__name__)

files = Path('./static')

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")




if __name__ == "__main__":
    app.run(debug=True)
