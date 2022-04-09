import React from "react";
import Card from "../components/card"

import dummydata from "../dummydata";

const HomePage = () => {
    //mapping card elements
    const cardElements = dummydata.map(card => {
        return <Card 
        title = {card.title} 
        clubName = {card.clubName}
        description = {card.description}
        location = {card.location}
        startTime = {card.startTime}
        endTime = {card.endTime}
        />
    })
    return (
        <div className="home-page-container">
            <h1>Home Page!</h1>
            {cardElements}
        </div>
    )
}

export default HomePage;