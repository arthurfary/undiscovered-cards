
from flask import Flask, jsonify, request
from firebase_admin import credentials, initialize_app, db
import firebase_admin
from firebase_admin import auth

app = Flask(__name__)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("./undiscovered-cards-firebase-admin.json")
initialize_app(cred, {
    'databaseURL': 'https://undiscovered-cards-default-rtdb.firebaseio.com/'
})


@app.route('/get_username', methods=['GET'])
def get_username():
    # Get the ID token from the request headers
    id_token = request.headers.get('Authorization')
    if not id_token:
        return jsonify({'error': 'No token provided'}), 401

    try:
        # Verify the ID token
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']

        # Get the user data from the Realtime Database
        user_ref = db.reference(f'users/{uid}')
        user_data = user_ref.get()

        if user_data and 'username' in user_data:
            return jsonify({'username': user_data['username']})
        else:
            return jsonify({'error': 'Username not found'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 401


if __name__ == '__main__':
    app.run(debug=True)
