import './Main.css'
import './Main-mobile.css'

import React, { useEffect, useState } from 'react'

import AboutMe from '../aboutMe/AboutMe';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';

const Main = () => {

    const [skillsAnimationDone, setSkillsAnimationDone] = useState(false)

    const checkHeight = () => {
        const skillsOffset = document.getElementsByClassName('skills')[0].offsetTop
        const contactOffset = document.getElementsByClassName('contact')[0].offsetTop
        const top = window.pageYOffset || document.documentElement.scrollTop

        if (top > skillsOffset / 2 && top < contactOffset + (1 / 3 * contactOffset) && !skillsAnimationDone) {
            setSkillsAnimationDone(true)
            const skillBoxes = document.getElementsByClassName('skillBox');

            for (let i = 0; i < skillBoxes.length; i++) {
                setTimeout(() => slideUpAnimation(skillBoxes[i]), 250 + (i * 70))
            }
        }
    }

    const slideUpAnimation = element => {
        element.style.animation = "box-in 0.3s ease-in forwards";
    }

    useEffect(() => {
        checkHeight();
        document.addEventListener("scroll", checkHeight)

        return () => {
            document.removeEventListener("scroll", checkHeight)
        }
    }, [])

    return (
        <main>
            <AboutMe />
            <Skills />
            <Contact />
        </main>
    );
}

export default Main;