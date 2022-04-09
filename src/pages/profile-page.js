import React from 'react';
import Card from '../components/card';
import testimage from '../testimages/TESTUSER.jpg'

//api call -> users api from mongodb -> returns json object

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div style={{display: 'flex', justifyContent: "space-between", columnGap: "100px"}}>
        <div style={{display: 'flex', flexDirection: 'column', width: "25%", rowGap: "20px"}}>
          <img src={testimage} alt="userimage" style={{objectFit: "cover", borderBlock: "5px solid black",
          borderRadius: "50%", columnGap: "100px", marginTop: "110px"}} />
          <b style={{fontSize: "25px"}}>NAME</b>
          <p align="left" style={{fontSize: "15px"}}>description</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: "73%"}}>
        <Card title={"hi"} clubName={"hi"} description={"hi"} location={"hi"} startTime={"hi"} endTime={"hi"} style={{}}/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
