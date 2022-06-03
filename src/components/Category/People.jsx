import React from 'react';

const People = ({el}) => {
    const {birth_year, eye_color, gender, hair_color, name, skin_color} = el
    return (
        <div className={'card'}>
            <h1>{name}</h1>
            <p>{birth_year}</p>
            <p>{eye_color}</p>
            <p>{gender}</p>
            <p>{hair_color}</p>
            <p>{skin_color}</p>
        </div>
    );
};

export default People;
