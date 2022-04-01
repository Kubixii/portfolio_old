import './Link.css'
import './Link-mobile.css'

import React from 'react';

//TODO cannot figure out why mobile css is not affecting anything 
const Link = ({ name, imageURL, URL }) => {
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