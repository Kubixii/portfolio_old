import './Link.css'

import React from 'react';

const Link = ({ name, imageURL, URL }) => {
    console.log(imageURL);
    return (
        <a href={URL} target="blank">
            <div className='link'>
                <div className='linkImageWrapper'>
                    <img src={imageURL} alt={imageURL} />
                </div>
                <p>{name}</p>
            </div>
        </a>
    );
}

export default Link;