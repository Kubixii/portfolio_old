import './Main.css'
import './Main-mobile.css'

import React, { useEffect, useState } from 'react'

import AboutMe from '../aboutMe/AboutMe';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';

const Main = () => {

    const [skillsAnimationDone, setSkillsAnimationDone] = useState(false)
    const [contactAnimationDone, setContactAnimationDone] = useState(false)

    const checkHeight = () => {
        const skillsOffset = document.getElementsByClassName('skills')[0].offsetTop
        const contactOffset = document.getElementsByClassName('contact')[0].offsetTop
        const top = window.pageYOffset || document.documentElement.scrollTop

        if (top > skillsOffset / 2 && top < contactOffset / 2 && !skillsAnimationDone) {
            setSkillsAnimationDone(true)
            const skillBoxes = document.getElementsByClassName('skillBox');

            for (let i = 0; i < skillBoxes.length; i++) {
                setTimeout(() => slideUpAnimation(skillBoxes[i]), 250 + (i * 80))
            }
        }

        if (top > contactOffset * (2 / 3) && !contactAnimationDone) {
            setContactAnimationDone(true)
            const title = document.getElementsByClassName("formTitle")[0];
            const email = document.getElementsByClassName("formEmail")[0];
            const message = document.getElementsByClassName("formMessage")[0];
            const button = document.getElementsByClassName("formButton")[0];

            title.style.animation = "0.4s slide-in 0.1s ease-in forwards";
            email.style.animation = "0.4s slide-in 0.3s ease-in forwards";
            message.style.animation = "0.4s slide-in 0.5s ease-in forwards";
            button.style.animation = "0.4s slide-in 0.7s ease-in forwards";
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
