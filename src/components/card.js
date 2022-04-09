import React from "react";



const Card = (prop) => {
    return (
        <div className="card-container">
            <span className="card-firstline">
                <h3 className="card-title">{prop.title}</h3>
                <h3>-</h3>
                <h3 className="card-clubname">{prop.clubName}</h3>
            </span>
            <p className="card-description">{prop.description}</p>
            <span className="card-thirdline">
                <h3 className="card-location">{prop.location}</h3>
                <h3 className="card-starttime">{prop.startTime}</h3>
                <h3>-</h3>
                <h3 className="card-endtime">{prop.endTime}</h3>
            </span>
        </div>
    )
}

export default Card;