import React from 'react';
import './Card.css'

const Starships = ({ el }) => {
    const {consumables, name, cost_in_credits} = el
    return (
        <div className={'card'}>
            <h1>{name}</h1>
            <p>{consumables}</p>
            <p>{cost_in_credits}</p>
        </div>
    );
};

export default Starships;
