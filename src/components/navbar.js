import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [redirect, setRedirect] = useState(false);

    const logout = () => {
        sessionStorage.removeItem('user');
        setIsLoggedIn(false);
        setRedirect(true);
    };

    return (
        <div className="navbar-container">
            {redirect && <Redirect push to="/" />}
            <div className="navbar-section">
                <Link to="./" className="navbar-logo-link">
                    Give me a Nintendo Switch :)
                </Link>
                {isLoggedIn && (
                    <Fragment>
                        <Link to="./club-creation" className="navbar-link">
                            <Button variant="success">Create a Club</Button>
                        </Link>
                        <Link to="./event-creation" className="navbar-link">
                            <Button variant="success">Create an Event</Button>
                        </Link>
                    </Fragment>
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
                        <Link to="./profile">
                            <FontAwesomeIcon
                                icon={faUser}
                                style={{
                                    height: '32px',
                                    marginTop: '4px',
                                    marginRight: '12px',
                                }}
                            />
                        </Link>
                        <Button variant="success" onClick={logout}>
                            Log out
                        </Button>
                    </div>
                ) : (
                    <Link to="/login">
                        <Button variant="success">Log in</Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
