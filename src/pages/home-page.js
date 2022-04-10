import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import adImage from '../testimages/adimage.jpg';
import adImage1 from '../testimages/adImage1.png';
import adImage2 from '../testimages/adImage2.png';

const HomePage = ({ isLoggedIn }) => {
    const [events, setEvents] = useState([]);
    const [savedEvents, setSavedEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            let result = await fetch('http://localhost:5000/events', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            setEvents(result);
        };

        fetchEvents();
    }, []);

    const cardElements = events.map((event) => {
        return (
            <Card
                favorites={savedEvents.map((event) => event.event_id)}
                isLoggedIn={isLoggedIn}
                event_id={event.event_id}
                key={event.event_id}
                title={event.title}
                clubName={event.club_name}
                description={event.description}
                location={event.location}
                startTime={event.start_time}
                endTime={event.end_time}
                date={event.date}
            />
        );
    });

    useEffect(() => {
        if (isLoggedIn) {
            const fetchSavedEvents = async () => {
                const user_email = sessionStorage.getItem('user');
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
                setSavedEvents(result);
            };

            fetchSavedEvents();
        }
    }, []);

    return (
        //     <div className="home-page-container">
        //         <h1>
        //             <b>Event List</b>
        //         </h1>
        //         <div className="home-page-combined-container">
        //             <div className="home-page-cards-container">{cardElements}</div>
        //             <img
        //                 alt="adimage"
        //                 src={adImage}
        //                 className="home-page-ad-image"
        //             ></img>
        //         </div>
        //     </div>
        <div className="home-page-container">
            <h1>
                <b>Event List</b>
            </h1>
            <div className="home-page-combined-container">
                <div className="home-page-cards-container">{cardElements}</div>
                <div className="home-page-ad-container">
                    <img
                        className="home-page-ad-image"
                        src={adImage1}
                        alt="adimage1"
                    />
                    <img
                        className="home-page-ad-image"
                        src={adImage2}
                        alt="adimage2"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
