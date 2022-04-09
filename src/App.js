import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="main-content-container">
                    <Switch>
                        <Route exact path="/" component={() => <HomePage />} />
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
                            component={() => <LoginPage />}
                        />
                        <Route
                            exact
                            path="/profile"
                            component={() => <ProfilePage />}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
