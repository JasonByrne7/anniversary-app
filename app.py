from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/memory')
def memory():
    return render_template('memory.html')

@app.route('/timeline')
def timeline():
    return render_template('timeline.html')

@app.route('/emotions')
def emotions():
    return render_template('emotions.html')

@app.route('/surprise')
def surprise():
    return render_template('surprise.html')

if __name__ == '__main__':
    app.run(debug=True)