// client/src/Register.js

import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleValidation = () => {
        const newErrors = {};

        // Validate email
        if (!emailPattern.test(userData.email)) {
            newErrors.email = 'Invalid email format.';
        }

        // Validate password
        if (userData.password.length > 10) {
            newErrors.password = 'Password should be 10 characters or less.';
        }

        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0 && userData.email && userData.password) {
            try {
                const response = await axios.post('/api/register', userData);
                console.log('User registered:', response.data);
            } catch (error) {
                console.error('Error registering user:', error.response.data);
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={userData.username}
                        onChange={(e) => {
                            setUserData({ ...userData, username: e.target.value });
                            handleValidation();
                        }}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={userData.email}
                        onChange={(e) => {
                            setUserData({ ...userData, email: e.target.value });
                            handleValidation();
                        }}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={userData.password}
                        onChange={(e) => {
                            setUserData({ ...userData, password: e.target.value });
                            handleValidation();
                        }}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
