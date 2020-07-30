from flask import Flask, render_template, Response
app = Flask(__name__)

@app.route('/')
def index():
    # rendering webpage
    return render_template('index.html')

@app.route('/python')
def hello_python():
   return 'Hello Python'

@app.route('/video_feed')
def video_feed():
    return 'Hello Python'

if __name__ == '__main__':
   app.run()