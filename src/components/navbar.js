import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const isLoggedIn = localStorage.getItem('user');

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to="./" className="navbar-logo-link">
                Give me a Nintendo Switch :)
            </Link>
            <div className="navbar-links">
                <Link to="./" className="navbar-link">
                    Home
                </Link>
                {isLoggedIn ? (
                    <Button variant="success">Log out</Button>
                ) : (
                    <Button variant="success">Log in</Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
