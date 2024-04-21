import React from 'react';

const Smile = ({name, onClick}) => {
    return(
        <div>
            <span>{name}</span>
            <button onClick={onClick}>Голос</button>
        </div>
    );
};

export default Smile;