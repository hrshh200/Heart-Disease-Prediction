import React from "react";
import './Home.css';

function Home() {
    return (
        <div>
            <h1 className="h1">Machine Learning Disease Prediction</h1>
            <div className="card">
                <h1 className="card-title">Heart Disease Prediction</h1>
                <div className="card-content">
                    <a href="http://localhost:3000/heartpred"><button className="btn">Predict</button></a>
                    <button className="btn">Predict Using OCR</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
