from flask import Flask, render_template
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
  return render_template('home.html')

@app.route("/lebanon")
def lebanon():
    with open('Countries/Lebanon.json', 'r') as f:   
        data = f.read()
    return data  

@app.route("/uae")
def uae():
    with open('Countries/uae.json', 'r') as f:   
        data = f.read()
    return data


@app.route("/uk")
def uk():
    with open('Countries/uk.json', 'r') as f:   
        data = f.read()
    return data


@app.route("/france")
def france():
    with open('Countries/france.json', 'r') as f:   
        data = f.read()
    return data

if __name__ == "__main__":
    app.run()