import React from 'react';
import './DisplayBox.style.css'

const DisplayBox = ({winner}) => {
    const {name, img, description} = winner;
    return(
        <div className="box" style={{backgroundImage: `url(${img})`}}>
            <div className="content">
                <h1>{name}</h1>
                <strong>{description}</strong>
            </div>
        </div>
    )
}

export default DisplayBox;