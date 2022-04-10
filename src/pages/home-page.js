import React from "react";
import Card from "../components/card"
import adImage from "../testimages/adimage.jpg"
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
            <h1><b>Event List</b></h1>
            <div className="home-page-combined-container">
                <div className="home-page-cards-container">
                    {cardElements}
                </div>
                <img alt="adimage" src={adImage} className="home-page-ad-image"></img>
            </div>
        </div>
    )
}

export default HomePage;