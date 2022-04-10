import React from 'react';
import { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';

const EventCreationPage = () => {
    const [club_id, setClubId] = useState(-1);
    const [date, setDate] = useState('');
    const [start_time, setStartTime] = useState(new Date());
    const [end_time, setEndTime] = useState(new Date());
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [redirect, setRedirect] = useState(false);

    const getEventId = async () => {
        let result = await fetch('http://localhost:5000/newEventID', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json();
        return result;
    };

    const handleEventSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            const { event_id } = await getEventId();
            const user_email = sessionStorage.getItem('user');
            let result = await fetch('http://localhost:5000/createEvent', {
                method: 'post',
                body: JSON.stringify({
                    event_id,
                    is_official: club_id !== -1,
                    club_id: club_id === -1 ? null : club_id,
                    user_email,
                    start_time,
                    end_time,
                    location,
                    description,
                    title,
                    date,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            console.warn(result);
            if (result) {
                alert('Data saved successfully');
                setRedirect(true);
            }
        },
        [club_id, start_time, end_time, location, description, title, date]
    );

    const updateClubId = (value) => {
        // Get the proper club id for the club name
        setClubId(-1);
    };

    return (
        <div className="event-creation-page-container">
            {redirect && <Redirect push to="/" />}
            <h1>Enter your event</h1>
            <div className="event-creation-page-form-container">
                <label for="title">Event Title:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setTitle(evt.target.value);
                    }}
                />
                <label for="clubName">Club Name:</label>
                {/* CHANGE TO DROPDOWN MENU */}
                <input
                    type="text"
                    onChange={(evt) => {
                        updateClubId(evt.target.value);
                    }}
                />
                <label for="description">Description:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setDescription(evt.target.value);
                    }}
                />
                <label for="location">Location:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setLocation(evt.target.value);
                    }}
                />
                <label for="startTime">Date:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setDate(evt.target.value);
                    }}
                />
                <label for="startTime">Start Time:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setStartTime(evt.target.value);
                    }}
                />
                <label for="lnendTimeame">End Time:</label>
                <input
                    type="text"
                    onChange={(evt) => {
                        setEndTime(evt.target.value);
                    }}
                />
            </div>
            <button
                className="event-creation-page-button"
                onClick={handleEventSubmit}
            >
                Submit Event
            </button>
        </div>
    );
};

export default EventCreationPage;
