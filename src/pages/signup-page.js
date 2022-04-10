import React from 'react';
import { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleUserSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            if (password !== confPassword) {
                alert('Passwords must match');
            } else {
                let result = await fetch(
                    'http://localhost:5000/register/user',
                    {
                        method: 'post',
                        body: JSON.stringify({
                            email,
                            name,
                            password,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                result = await result.json();
                console.warn(result);
                if (result) {
                    alert('Sign up successful');
                    setRedirect(true);
                }
            }
        },
        [email, name, password, confPassword]
    );

    const updatePassword = (password) => {
        const hashed_password = password;
        setPassword(hashed_password);
    };

    const updateConfPassword = (password) => {
        const hashed_password = password;
        setConfPassword(hashed_password);
    };

    return (
        <div className="signup-page-container">
            {redirect && <Redirect push to="/" />}
            <h1>Enter Your Information</h1>
            <form className="signup-page-form-container">
                <label for="email">Email:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setEmail(evt.target.value);
                    }}
                />
                <label for="name">Name:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setName(evt.target.value);
                    }}
                />
                <label for="password">Password:</label>
                <input
                    type="password"
                    onChange={(evt) => {
                        updatePassword(evt.target.value);
                    }}
                />
                <label for="passwordCon">Confirm Password:</label>
                <input
                    type="password"
                    onChange={(evt) => {
                        updateConfPassword(evt.target.value);
                    }}
                />
            </form>
            <button
                className="event-creation-page-button"
                onClick={handleUserSubmit}
            >
                Sign up
            </button>
        </div>
    );
};

export default SignUpPage;
