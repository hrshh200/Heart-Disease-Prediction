from flask import Flask, jsonify, request
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hello World"

@app.route('/predict', methods = ['POST'])
def predict():
    age = int(request.form['age'])
    sex = int(request.form['sex'])
    cp = int(request.form['cp'])
    trestbps = int(request.form['trestbps'])
    chol = int(request.form['chol'])
    fbs = int(request.form['fbs'])
    restecg = int(request.form['restecg'])
    thalach = int(request.form['thalach'])
    exang = int(request.form['exang'])
    oldpeak = float(request.form['oldpeak'])
    slope = int(request.form['slope'])
    ca = int(request.form['ca'])
    thal = int(request.form['thal'])



    data=predictdatamodel(age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal)
    if data == 1:
        return jsonify({"Output":"The person is having a heart disease"})
    else:
        return jsonify({"Output":"The person is not having a heart disease"})
    

def predictdatamodel(age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal):
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score

    # Load and preprocess the dataset
    heart_data = pd.read_csv(r'C:/Users/User/heartprediction/api/venv/heart_disease_data.csv')
    X = heart_data.drop(columns='target', axis=1)
    Y = heart_data['target']

    # Train-test split
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)  

    # Train the model
    model = LogisticRegression()
    model.fit(X_train, Y_train)

    Xtrain_prediction=model.predict(X_train)
    accuracyoftrain=accuracy_score(Xtrain_prediction, Y_train)

    Xtest_prediction=model.predict(X_test)
    accuracyoftest=accuracy_score(Xtest_prediction, Y_test)

    input_data= (age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal)

    input_array= np.asarray(input_data)

    input_array_reshaped= input_array.reshape(1,-1)

    # Predict using input data
    prediction = model.predict(input_array_reshaped)
    
    if prediction[0] == 1:
       return 1
    else:
       return 0

if __name__ == '__main__':
    app.run(debug=True)
