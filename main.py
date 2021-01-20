from flask import Flask
from flask import send_from_directory
from werkzeug.routing import BaseConverter


app = Flask(__name__, static_url_path="", static_folder="scs-app/dist/scs-app/")

class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


app.url_map.converters['regex'] = RegexConverter

@app.route("/")
def angular():
    return send_from_directory("scs-app/dist/scs-app/", "index.html")

@app.route("/<regex('\w\.(js|css)'):path>")
def angular_src(path):
    return send_from_directory("scs-app/dist/scs-app/", path)

@app.route("/hello")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()