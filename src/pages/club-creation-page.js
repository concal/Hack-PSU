import React from 'react';

const ClubCreationPage = () => {
  return (
    <div className="club-creation-page-container">
      <h1>Enter your club</h1>
      <form className='club-creation-page-form-container'>
        <label for="clubName">Club Name:</label>
        <input type="text" id="clubName" name="clubName" />
        <label for="description">Club Description:</label>
        <input type="text" id="club_description" name="club_description" />
        <label for="category">Category:</label>
        <input type="text" id="category" name="category" />
      </form>
      <button className="club-creation-page-button" id="submit">Submit</button>
    </div>
  );
};

export default ClubCreationPage;
