import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../components/card';

const ProfilePage = () => {
    const [events, setEvents] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    console.log(userInfo);

    const cardElements = events.map((event) => {
        return (
            <Card
                favorites={events.map((event) => event.event_id)}
                event_id={event.event_id}
                key={event.event_id}
                title={event.title}
                clubName={event.club_name}
                description={event.description}
                location={event.location}
                startTime={event.start_time}
                endTime={event.end_time}
            />
        );
    });

    useEffect(() => {
        const fetchEvents = async () => {
            const user_email = sessionStorage.getItem('user');
            console.log('here');
            let result = await fetch('http://localhost:5000/users/events', {
                method: 'post',
                body: JSON.stringify({
                    email: user_email,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            setEvents(result);
        };

        fetchEvents();
    }, []);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const user_email = sessionStorage.getItem('user');
            console.log('here');
            let result = await fetch('http://localhost:5000/users/info', {
                method: 'post',
                body: JSON.stringify({
                    email: user_email,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            setUserInfo(result);
        };

        fetchUserInfo();
    }, []);

    return (
        <div className="profile-page-container">
            <div className="profile-flex-box-container">
                <div className="profile-card-container">
                    <img
                        className="profile-photo"
                        src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                        alt="userimage"
                    />
                    <b className="profile-name">{userInfo.name}</b>
                    <p className="profile-description">{userInfo.email}</p>
                </div>
                <div className="profile-events-container">{cardElements}</div>
            </div>
        </div>
    );
};

export default ProfilePage;
