import './Sidebar.css'
import './Sidebar-mobile.css'

import React, { useContext, useEffect } from 'react'

import LanguageChangeBox from '../languageChangeBox/LanguageChangeBox';
import { StoreContext } from '../../store/StoreProvider';
import menuImg from '../../resources/sidebar/Hamburger_icon.png'

const Sidebar = () => {

    const { languageText, setCurrentPage, isMobile } = useContext(StoreContext);

    useEffect(() => {
        setTimeout(insertAnimation, 1000);
    }, [])

    const insertAnimation = () => {
        if (isMobile) document.querySelector('nav').style.animation = "show 0.5s ease-in";
    }
    const test = (item) => {
        const panels = ['.aboutMe', '.skills', '.contact']
        setCurrentPage(item);
        document.querySelector(panels[item]).scrollIntoView({
            behavior: 'smooth'
        });
        if (isMobile) hideSidebar();
    }
    const showSidebar = () => {
        document.querySelector('nav').classList.add("navOpen")
        document.querySelector('.backdrop').classList.add("backdropShow")
    }
    const hideSidebar = () => {
        document.querySelector('nav').classList.remove("navOpen")
        document.querySelector('.backdrop').classList.remove("backdropShow")
    }
    return (
        <>
            <div className='backdrop' onClick={hideSidebar}></div><img src={menuImg} alt="hamburger menu icon" className='burgerMenu' onClick={showSidebar} />
            <nav>
                <LanguageChangeBox />
                <ul className='navigationList'>
                    <li className='navigationListItem' onClick={() => test(0)}>{languageText.navigationList.aboutMe}</li>
                    <li className='navigationListItem' onClick={() => test(1)}>{languageText.navigationList.skills}</li>
                    <li className='navigationListItem' onClick={() => test(2)}>{languageText.navigationList.contact}</li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;