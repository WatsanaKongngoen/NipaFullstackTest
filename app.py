from flask import Flask
from flask_cors import CORS
from controllers.ticket_controller import ticket_api

app = Flask(__name__,static_folder='static',static_url_path="/static/")

cors = CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*"}})

app.register_blueprint(ticket_api)

if "__main__" == __name__:
    app.run(host="0.0.0.0", port=4001, debug=True, threaded=True)
