import React from 'react';

const RandomButton = ({handleClick}) => {
    return(
        <div>
            <button onClick={handleClick}>Random</button>
        </div>
    )
}

export default RandomButton;