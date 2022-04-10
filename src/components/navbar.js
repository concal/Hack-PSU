import React from 'react';
import { useState, Fragment } from 'react';
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
                <Link
                    style={{ color: 'white' }}
                    to="./"
                    className="navbar-logo-link"
                >
                    Nittany Lion Event Hub
                </Link>
                {isLoggedIn && (
                    <Fragment>
                        <Link to="./club-creation" className="navbar-link">
                            <Button
                                style={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                            >
                                Create a Club
                            </Button>
                        </Link>
                        <Link to="./event-creation" className="navbar-link">
                            <Button
                                style={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                            >
                                Create an Event
                            </Button>
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
                        <Button
                            style={{ backgroundColor: 'white', color: 'black' }}
                            onClick={logout}
                        >
                            Log out
                        </Button>
                    </div>
                ) : (
                    <Link to="/login">
                        <Button
                            style={{ backgroundColor: 'white', color: 'black' }}
                        >
                            Log in
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
