import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required.';
        if (!email) newErrors.email = 'Email is required.';
        if (!password) newErrors.password = 'Password is required.';
        if (Object.keys(newErrors).length === 0) {
            console.log('Form Submitted:', { username, email, password });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username} // Uses the username state
                    onChange={(e) => setUsername(e.target.value)} // Updates the username state
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email} // Uses the email state
                    onChange={(e) => setEmail(e.target.value)} // Updates the email state
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password} // Uses the password state
                    onChange={(e) => setPassword(e.target.value)} // Updates the password state
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;