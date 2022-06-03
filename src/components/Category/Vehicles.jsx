import React from 'react';
import './Card.css'


const Vehicles = ({ el }) => {
    const {cargo_capacity, crew, name, model} = el
    return (
        <div className={'card'}>
            <h1>{name}</h1>
            <p>{cargo_capacity}</p>
            <p>{crew}</p>
            <p>{model}</p>
        </div>
    );
};

export default Vehicles;
