import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import adImage from '../testimages/adimage.jpg';

const HomePage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            let result = await fetch('http://localhost:5000/events', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            console.log(result);

            // const events = result;

            // const test = async (event) => {
            //     if (event.is_official) {
            //         const club_name = await getClubName(event.club_id);
            //         event.club_name = club_name;
            //     }
            //     return event;
            // };

            // const eventsWithClubNames = events.map(await test);

            // console.log(eventsWithClubNames);

            setEvents(result);
        };

        fetchEvents();
    }, []);

    //mapping card elements
    const cardElements = events.map((event) => {
        return (
            <Card
                title={event.title}
                clubName={event.club_name}
                description={event.description}
                location={event.location}
                startTime={event.start_time}
                endTime={event.end_time}
            />
        );
    });
    return (
        <div className="home-page-container">
            <h1>
                <b>Event List</b>
            </h1>
            <div className="home-page-combined-container">
                <div className="home-page-cards-container">{cardElements}</div>
                <img
                    alt="adimage"
                    src={adImage}
                    className="home-page-ad-image"
                ></img>
            </div>
        </div>
    );
};

export default HomePage;
