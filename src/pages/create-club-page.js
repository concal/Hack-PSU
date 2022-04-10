import React from 'react';
import { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const categories = [
    'academic',
    'sport',
    'international',
    'philanthropic',
    'special interest',
];

const ClubCreationPage = () => {
    const [club_name, setClubName] = useState('');
    const [club_description, setClubDescription] = useState('');
    const [category, setCategory] = useState('');
    const [redirect, setRedirect] = useState(false);

    const getClubId = async () => {
        let result = await fetch('http://localhost:5000/newClubID', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json();
        return result;
    };

    const handleClubSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            const { club_id } = await getClubId();
            const owner_email = sessionStorage.getItem('user');
            let result = await fetch('http://localhost:5000/register/club', {
                method: 'post',
                body: JSON.stringify({
                    club_name,
                    club_description,
                    category,
                    club_id,
                    owner_email,
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
        [club_name, club_description, category]
    );

    return (
        <div className="club-creation-page-container">
            {redirect && <Redirect push to="/" />}
            <h1>Enter your club</h1>
            <form className="club-creation-page-form-container">
                <label for="clubName">Club Name:</label>
                <input
                    type="text"
                    onChange={(evt) => setClubName(evt.target.value)}
                />
                <label for="description">Club Description:</label>
                <input
                    type="text"
                    onChange={(evt) => setClubDescription(evt.target.value)}
                />
                <label for="category">Category:</label>
                <Dropdown
                    options={categories}
                    onChange={(evt) => setCategory(evt.value)}
                    placeholder="Select an option"
                />
                ;
            </form>
            <button
                className="club-creation-page-button"
                onClick={handleClubSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default ClubCreationPage;
