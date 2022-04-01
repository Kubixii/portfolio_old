import React, { createContext, useEffect, useState } from 'react'

import contents from '../contents/contents.json';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('pl')
    const [languageText, setLanguageText] = useState(contents.pl);
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const [skillsAnimationDone, setSkillsAnimationDone] = useState(false)
    const [contactAnimationDone, setContactAnimationDone] = useState(false)
    const [linksAnimationDone, setLinksAnimationDone] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 750) setIsMobile(true)
    }, [skillsAnimationDone])

    const switchLanguage = () => {
        if (currentLanguage === 'pl') {
            setLanguageText(contents.en)
            setCurrentLanguage('en')
        }
        else {
            setLanguageText(contents.pl)
            setCurrentLanguage('pl')
        }
    }

    return (
        <StoreContext.Provider value={{
            currentLanguage,
            languageText,
            currentPage,
            isMobile,
            skillsAnimationDone,
            contactAnimationDone,
            linksAnimationDone,
            setSkillsAnimationDone,
            setContactAnimationDone,
            setLinksAnimationDone,
            switchLanguage,
            setCurrentPage
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;