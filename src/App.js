import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home-page';
import EventOrganizerPage from './pages/event-organizer-page';
import EventCreationPage from './pages/event-creation-page';
import EventPage from './pages/event-page';
import LoginPage from './pages/login-page';
import ProfilePage from './pages/profile-page';
import SignUpPage from './pages/signup-page';
import ClubCreationPage from './pages/create-club-page';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        sessionStorage.getItem('user') !== null
    );
    return (
        <Router>
            <div className="App">
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <div className="main-content-container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={() => (
                                <HomePage isLoggedIn={isLoggedIn} />
                            )}
                        />
                        <Route
                            exact
                            path="/event-organizer"
                            component={() => <EventOrganizerPage />}
                        />
                        <Route
                            exact
                            path="/event-creation"
                            component={() => <EventCreationPage />}
                        />
                        <Route
                            exact
                            path="/event"
                            component={() => <EventPage />}
                        />
                        <Route
                            exact
                            path="/login"
                            component={() => (
                                <LoginPage setIsLoggedIn={setIsLoggedIn} />
                            )}
                        />
                        <Route
                            exact
                            path="/profile"
                            component={() => <ProfilePage />}
                        />
                        <Route
                            exact
                            path="/club-creation"
                            component={() => <ClubCreationPage />}
                        />
                        <Route
                            exact
                            path="/signup"
                            component={() => <SignUpPage />}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
