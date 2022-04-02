import './Link.css'
import './Link-mobile.css'

import React from 'react';

const Link = ({ name, imageURL, URL }) => {
    return (
        <div className='link'>
            <a href={URL} target="blank">
                <div className='linkImageWrapper'>
                    <img src={imageURL} alt={imageURL} />
                </div>
                <p>{name}</p>
            </a>
        </div>
    );
}

export default Link;