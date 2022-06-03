import React from 'react';
import './Card.css'

const Species = ({ el }) => {
    const {eye_colors, hair_colors, name, language} = el
    return (
        <div className={'card'}>
            <h1>{name}</h1>
            <p>{eye_colors}</p>
            <p>{hair_colors}</p>
            <p>{language}</p>
        </div>
    );
};

export default Species;
