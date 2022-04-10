import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = (prop) => {
    const [favorite, setFavorite] = useState(
        prop.favorites.includes(prop.event_id)
    );

    useEffect(() => {
        setFavorite(prop.favorites.includes(prop.event_id));
    }, [prop.favorites, prop.event_id]);

    const handleFavoriteChange = useCallback(
        async (e) => {
            setFavorite(!favorite);
            e.preventDefault();
            const owner_email = sessionStorage.getItem('user');
            let result = await fetch(
                'http://localhost:5000/users/update/favorites',
                {
                    method: 'post',
                    body: JSON.stringify({
                        email: owner_email,
                        event_id: prop.event_id,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            result = await result.json();
            console.warn(result);
        },
        [favorite, setFavorite, prop.event_id]
    );

    return (
        <div className="card-container">
            <span className="card-firstline">
                {prop.isLoggedIn &&
                    (favorite ? (
                        <FontAwesomeIcon
                            icon={faStar}
                            onClick={handleFavoriteChange}
                            style={{
                                color: 'rgb(245, 194, 107)',
                                height: '28px',
                            }}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={emptyStar}
                            onClick={handleFavoriteChange}
                            style={{
                                color: 'rgb(245, 194, 107)',
                                height: '28px',
                            }}
                        />
                    ))}

                <h3 className="card-title">{prop.title}</h3>
                {prop.clubName && <h3>-</h3>}
                <h3 className="card-clubname">{prop.clubName}</h3>
            </span>
            <p className="card-description">{prop.description}</p>
            <span className="card-thirdline">
                <h3 className="card-location">{prop.location}</h3>
                <h3 className="card-location">{prop.date}</h3>
                <h3 className="card-starttime">{prop.startTime}</h3>
                <h3>-</h3>
                <h3 className="card-endtime">{prop.endTime}</h3>
            </span>
        </div>
    );
};

export default Card;
