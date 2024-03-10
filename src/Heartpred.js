import React, { useState } from 'react';
import './Heartpred.css'; // Import your CSS file for styling
import axios from 'axios';

function MyForm() {
    const [formData, setFormData] = useState(new FormData());
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update the FormData object with input values from the user
        formData.set(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your API endpoint
            const response = await axios.post('http://localhost:5000/predict', formData);
            console.log('Response from API:', response.data);
            setResult(response.data.Output)
            // You can handle the response from the API here
        } catch (error) {
            console.error('Error sending data to API:', error);
            // Handle errors here
        }
    };

    return (
        <div>
            <h2>This is a health prediction Website</h2>
            <form className="my-form" onSubmit={handleSubmit}>
                <div className='divstyle'>
                    <div>
                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sex">Sex:</label>
                            <input
                                type="number"
                                id="sex"
                                name="sex"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cp">Cp:</label>
                            <input
                                type="number"
                                id="cp"
                                name="cp"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="trestbps">trestbps:</label>
                            <input
                                type="number"
                                id="trestbps"
                                name="trestbps"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="chol">chol:</label>
                            <input
                                type="number"
                                id="chol"
                                name="chol"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fbs">fbs:</label>
                            <input
                                type="number"
                                id="fbs"
                                name="fbs"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div>
                        <div className="form-group">
                            <label htmlFor="restecg">restecg:</label>
                            <input
                                type="number"
                                id="restecg"
                                name="restecg"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="thalach">thalach:</label>
                            <input
                                type="number"
                                id="thalach"
                                name="thalach"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exang">exang:</label>
                            <input
                                type="number"
                                id="exang"
                                name="exang"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="oldpeak">oldpeak:</label>
                            <input
                                type="number"
                                id="oldpeak"
                                name="oldpeak"
                                onChange={handleChange}
                                step="any"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="slope">slope:</label>
                            <input
                                type="number"
                                id="slope"
                                name="slope"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ca">ca:</label>
                            <input
                                type="number"
                                id="ca"
                                name="ca"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="form-group">
                        <label htmlFor="thal">thal:</label>
                        <input
                            type="number"
                            id="thal"
                            name="thal"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='btnstyle'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-primary1">Reset</button>
                </div>
                <h1>{result}</h1>
            </form>
        </div>
    );
}

export default MyForm;
