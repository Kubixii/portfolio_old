import './AboutMe.css'

import React, { useContext } from 'react'

import { StoreContext } from '../../store/StoreProvider';

const AboutMe = () => {

    const { languageText: { aboutMe } } = useContext(StoreContext)
    return (
        <div className='aboutMe panel'>
            <article>
                <h1>{aboutMe.introduction}</h1>
                <p>{aboutMe.whatIDo}</p>
                <div className='whoIAm'>
                    <p>{aboutMe.whoIAm}</p>
                </div>
            </article>
        </div>
    );
}

export default AboutMe;