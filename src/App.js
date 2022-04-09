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
    // const handleAddUser = async (e) => {
    //     e.preventDefault();
    //     let result = await fetch('http://localhost:5000/register/user', {
    //         method: 'post',
    //         body: JSON.stringify({
    //             name: 'connor calderon',
    //             email: 'a@b.c',
    //             password: 'pass',
    //             privelege: true,
    //             event_ids: [],
    //             club_ids: [],
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     result = await result.json();
    //     console.warn(result);
    //     if (result) {
    //         alert('Data saved successfully');
    //         // Reset input fields
    //     }
    // };

    // const handleAddClub = async (e) => {
    //     e.preventDefault();
    //     let result = await fetch('http://localhost:5000/register/club', {
    //         method: 'post',
    //         body: JSON.stringify({
    //             club_id: 1,
    //             category: 'cool category',
    //             club_name: 'cool club',
    //             club_description: 'We are the coolest club on campus.',
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     result = await result.json();
    //     console.warn(result);
    //     if (result) {
    //         alert('Data saved successfully');
    //         // Reset input fields
    //     }
    // };

    // const handleAddEvent = async (e) => {
    //     e.preventDefault();
    //     let result = await fetch('http://localhost:5000/createEvent', {
    //         method: 'post',
    //         body: JSON.stringify({
    //             event_id: 1,
    //             is_official: true,
    //             club_id: 1,
    //             user_email: null,
    //             start_time: Date(100),
    //             end_time: Date(200),
    //             location: 'IM Building',
    //             description: 'This event is very cool',
    //             title: 'The coolest event',
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     result = await result.json();
    //     console.warn(result);
    //     if (result) {
    //         alert('Data saved successfully');
    //         // Reset input fields
    //     }
    // };
    //

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
