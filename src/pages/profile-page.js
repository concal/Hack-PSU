import React from 'react';
import Card from '../components/card';
import testimage from '.../public/testimages/TESTUSER.jpg'


const ProfilePage = () => {
//api call
// response

  return (
    <div className="profile-page-container">
      <div className="profile-flex-box-container">
        <div className="profile-card-container">
          <img className="profile-photo"src={testimage} alt="userimage"/>
          <b className="profile-name"> CLUB NAME</b>
          <p className="profile-description"align="left">club description</p> {/*LIMIT THE LENGTH OF THIS DESCRIPTION */}
        </div>
        <div className="profile-events-container">
          <Card title={"hi"} clubName={"hi"} description={"hi"} location={"hi"} startTime={"hi"} endTime={"hi"} style={{}}/>
          
        
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;