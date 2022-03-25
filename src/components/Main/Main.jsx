import './Main.css'
import './Main-mobile.css'

import AboutMe from '../aboutMe/AboutMe';
import Contact from '../contact/Contact';
import React from 'react'
import Skills from '../skills/Skills';

const Main = () => {

    return (
        <main>
            <AboutMe />
            <Skills />
            <Contact />
        </main>
    );
}

export default Main;