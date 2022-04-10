import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const isLoggedIn = true;
// const isLoggedIn = localStorage.getItem('user');

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-section">
                <Link to="./" className="navbar-logo-link">
                    Give me a Nintendo Switch :)
                </Link>
                {isLoggedIn && (
                    <Link to="./event-creation" className="navbar-link">
                        <Button variant="success">Create an Event</Button>
                    </Link>
                )}
            </div>
            <div className="navbar-section">
                {isLoggedIn ? (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center,',
                        }}
                    >
                        <Link to="./profile" className="navbar-link">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Button variant="success">Log out</Button>
                    </div>
                ) : (
                    <Button variant="success">Log in</Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
