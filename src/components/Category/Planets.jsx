import React from 'react';
import './Card.css'

const Planets = ({ el }) => {
    const {name, climate, diameter} = el
    return (
        <div className={'card'}>
            <h1>{name}</h1>
            <p>{climate}</p>
            <p>{diameter}</p>
        </div>
    );
};

export default Planets;
