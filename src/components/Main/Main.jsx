import './Main.css'
import './Main-mobile.css'

import React, { useContext, useEffect } from 'react'

import AboutMe from '../aboutMe/AboutMe';
import Contact from '../contact/Contact';
import Links from '../links/Links';
import Skills from '../skills/Skills';
import { StoreContext } from '../../store/StoreProvider';

const Main = () => {

    const { skillsAnimationDone, setSkillsAnimationDone, contactAnimationDone, setContactAnimationDone, linksAnimationDone, setLinksAnimationDone } = useContext(StoreContext)

    const checkHeight = () => {
        const skillsOffset = document.getElementsByClassName('skills')[0].offsetTop
        const linksOffset = document.getElementsByClassName('links')[0].offsetTop
        const contactOffset = document.getElementsByClassName('contact')[0].offsetTop
        const top = window.pageYOffset || document.documentElement.scrollTop


        if (!skillsAnimationDone && top > skillsOffset * (4 / 5) && top < linksOffset) {
            setSkillsAnimationDone(true)

            const skillBoxes = Array.from(document.getElementsByClassName('skillBox'));

            skillBoxes.map((skillBox, index) => {
                skillBox.style.animation = `box-in 0.3s ease-in ${0.25 + (index * 0.08)}s forwards`;
            })


        }

        if (top > linksOffset * (4 / 5) && !linksAnimationDone) {
            setLinksAnimationDone(true);
            const linksBoxes = Array.from(document.getElementsByClassName('link'));

            linksBoxes.map((linkBox, index) => {
                linkBox.style.animation = `box-in 0.3s ease-in ${0.25 + (index * 0.08)}s forwards`;
            })
        }

        if (top > contactOffset * (4 / 5) && !contactAnimationDone) {
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

    useEffect(() => {
        checkHeight();
        document.addEventListener("scroll", checkHeight)

        return () => {
            document.removeEventListener("scroll", checkHeight)
        }
    })

    return (
        <main>
            <AboutMe />
            <Skills />
            <Links />
            <Contact />
        </main>
    );
}

export default Main;
