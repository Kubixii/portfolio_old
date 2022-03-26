import './Skills.css'
import './Skills-mobile.css'

import React, { useContext } from 'react';

import SkillBox from './skillBox/SkillBox';
import { StoreContext } from '../../store/StoreProvider';

const Skills = () => {

    const { languageText: { skills } } = useContext(StoreContext)

    const importImages = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importImages(require.context('../../resources/skills', false, /\.(png|jpe?g|svg)$/));
    const skillsList = skills.map(skill => {
        const imageURL = images[skill.imageURL]
        return <SkillBox key={skill.name} name={skill.name} imageURL={imageURL} />;
    })


    return (
        <div className='skills panel'>
            <div className='skillsWrapper'>
                {skillsList}
            </div>
        </div>
    );
}

export default Skills;