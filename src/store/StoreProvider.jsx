import React, { createContext, useState } from 'react'

import contents from '../contents/contents.json';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('pl')
    const [languageText, setLanguageText] = useState(contents.pl);
    const [currentPage, setCurrentPage] = useState(0);

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
            switchLanguage,
            setCurrentPage
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;