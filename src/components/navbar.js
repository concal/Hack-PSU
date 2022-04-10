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
                <Link style={{color: "white"}} to="./" className="navbar-logo-link">
                    Home Page
                </Link>
                {isLoggedIn && (
                    <Link to="./event-creation" className="navbar-link">
                        <Button style={{backgroundColor: "white", color: "black"}} variant="success">Create an Event</Button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="./club-creation" className="navbar-link">
                        <Button style={{backgroundColor: "white", color: "black"}} variant="success">Create a Club</Button>
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
                        <Button style={{backgroundColor: "white", color: "black"}} variant="success">Log out</Button>
                    </div>
                ) : (
                    <Button style={{backgroundColor: "white", color: "black"}} variant="success">Log in</Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;