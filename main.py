from flask import Flask

app = Flask(__name__)
@app.route('/')
def hello_world():
    return open('index.html','r').read()

@app.route('/js/<path:fp>')
def js(fp):
    return open('js/'+fp).read(), {"Content-Type": "text/javascript"}

@app.route('/css/<path:fp>.css')
def css(fp):
    return open('css/'+fp+'.css').read(), {"Content-Type": "text/css"}

@app.route('/css/<path:fp>.ttf')
def ttf(fp):
    return open('css/'+fp+'.ttf').read(), {"Content-Type": "font/ttf"}

@app.route('/backgrounds/<path:fp>.jpg')
def imgs(fp):
    b = open('backgrounds/'+fp+'.jpg', 'rb')
    return b, {"Content-Type": "image/jpeg"}

@app.route('/images/overlay.png')
def overlay():
    b = open('images/overlay.png', 'rb')
    return b, {"Content-Type": "image/png"}

@app.route('/music/<path:fp>.ogg')
def ogg(fp):
    b = open('music/'+fp+'.ogg', 'rb')
    return b, {"Content-Type": "application/ogg"}

