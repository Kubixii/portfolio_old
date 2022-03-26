import './SkillBox.css'
import './SkillBox-mobile.css'

import React from 'react';

const SkillBox = ({ name, imageURL }) => {
    return (
        <div className='skillBox'>
            <p>{name}</p>
            <div className='skillImageWrapper'>
                <img src={imageURL} alt={name} />
            </div>
        </div>
    );
}

export default SkillBox;