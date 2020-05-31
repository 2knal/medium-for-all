from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin
from scraper import fetch_page

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/fetch', methods=['GET'])
@cross_origin()
def fetch():
    url = request.args.get('url').strip()
    if url:
        return jsonify(fetch_page(url))
    return jsonify({ 'success': False, })

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5500)
