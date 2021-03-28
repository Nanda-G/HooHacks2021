from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from config import Config
import base64
import cv2
import numpy as np
from flask_socketio import SocketIO
from time import *
from cv import *

app = Flask(__name__)
bcrypt = Bcrypt(app)
socketio = SocketIO(app, cors_allowed_origins='*')
CORS(app, resources={r"/api/": {"origins": "*"}})
app.config.from_object(Config)


@app.route('/api/login', methods=['POST'])
def login():
	data = request.get_json()
	if 'email' in data  and 'password' in data:
		email = data['email']
		password = data['password']
		return jsonify({ "email":email,"pass": password})
	else:
		return jsonify({"msg": "Enter email and password"})


@app.route('/api/register', methods=['POST'])
def register():
	data = request.get_json()
	name = data['name']
	email = data['email']
	phone = data['phone']
	password = data['password']
	hashed_pw = bcrypt.generate_password_hash(password)
	return jsonify({ "email":email,"phone": phone, "hash":str(hashed_pw)})


@app.route('/api/img', methods=['POST'])
def img():
    data = request.get_json()
    img_data = base64.b64decode(data["img"])
    nparr = np.fromstring(img_data, np.uint8)
    img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return jsonify({"res": data["img"]})

@socketio.on("image_send")
def socketio_test(photoData):
    img_data = base64.b64decode(photoData)
    nparr = np.fromstring(img_data, np.uint8)
    img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    cv2.imshow("dhd",img_np)
    cv2.waitKey(1)
    string1 = face_detection(img_np)
    print(string1)
    socketio.emit('model_response', string1)

if __name__ == "__main__":
	socketio.run(app, port=8000, debug=True)
