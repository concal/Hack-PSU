import React from 'react';
import testimage from '../testimages/TESTUSER.jpg';

//api call -> users api from mongodb -> returns json object

const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            <h1>Profile Page!</h1>
            <img
                src={testimage}
                alt="userimage"
                align="left"
                width="300"
                height="300"
                style={{ borderRadius: '100%' }}
            />
            <p align="left">description</p>
        </div>
    );
};

export default ProfilePage;
