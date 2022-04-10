import React from 'react';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleLogIn = useCallback(
        async (e) => {
            e.preventDefault();
            JSON.stringify({
                email,
                password,
            });
            let result = await fetch('http://localhost:5000/login', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            console.warn(result);
            if (result) {
                sessionStorage.setItem('user', email);
                setRedirect(true);
                setIsLoggedIn(true);
            } else {
                alert('incorrect email or password');
            }
        },
        [email, password, setIsLoggedIn]
    );

    return (
        <div>
            <div className="login-page-container">
                {redirect && <Redirect push to="/" />}
                <h1>log in</h1>
                <form className="login-page-form-container">
                    <label for="email">Email:</label>
                    <input
                        type="text"
                        onChange={(evt) => {
                            setEmail(evt.target.value);
                        }}
                    />
                    <label for="email">Password:</label>
                    <input
                        type="text"
                        onChange={(evt) => {
                            setPassword(evt.target.value);
                        }}
                    />
                </form>
                <button className="login-page-button" onClick={handleLogIn}>
                    log in
                </button>
            </div>
            <h5>
                Don't have an account?{' '}
                <Link to="/signup">Click here to sign up</Link>
            </h5>
        </div>
    );
};

export default LoginPage;
