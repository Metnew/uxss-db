from flask import Flask, send_from_directory, request

app = Flask(__name__, static_url_path='', static_folder='')

mimes = {
    'html': 'text/html',
    'js': 'text/javascript'
}

@app.after_request
def add_header(r):
    r.headers['Content-Type'] = mimes.get(request.path.split('.')[-1], 'application/json')
    r.headers['X-XSS-Protection'] = '0' # not required.
    r.headers['Access-Control-Allow-Origin'] = '*'
    return r

app.run(port=30000)