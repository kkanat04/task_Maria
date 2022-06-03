import React from 'react';
import './Card.css'

function Films({el}) {
    const {title, director, producer} = el;
    return (
        <div className={'card'}>
            <h1>{title}</h1>
            <p>{director}</p>
            <p>{producer}</p>
        </div>
    );
}

export default Films;
