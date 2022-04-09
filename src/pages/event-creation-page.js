import React from 'react';

const EventCreationPage = () => {
  return (
    <div className="event-creation-page-container">
      <h1>Enter your event</h1>
      <form className='event-creation-page-form-container'>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label for="clubName">Club Name:</label>
        <input type="text" id="clubName" name="clubName" />
        <label for="description">Description:</label>
        <input type="text" id="description" name="description" />
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" />
        <label for="startTime">Start Time:</label>
        <input type="text" id="startTIme" name="startTime" />
        <label for="lnendTimeame">End Time:</label>
        <input type="text" id="endTime" name="endTime" />
      </form>
      <button className="event-creation-page-button" id="submit">Submit</button>
    </div>
  );
};

export default EventCreationPage;
