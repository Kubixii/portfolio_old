import './Sidebar.css'

import React, { useContext } from 'react'

import LanguageChangeBox from '../languageChangeBox/LanguageChangeBox';
import { StoreContext } from '../../store/StoreProvider';

const Sidebar = () => {

    const { languageText, setCurrentPage } = useContext(StoreContext);

    const test = (item) => {
        const vpHeight = window.innerHeight
        setCurrentPage(item);
        window.scrollTo({
            top: vpHeight * item,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <nav>
            <ul className='navigationList'>
                <li className='navigationListItem' onClick={() => test(0)}>{languageText.navigationList.aboutMe}</li>
                <li className='navigationListItem' onClick={() => test(1)}>{languageText.navigationList.skills}</li>
                <li className='navigationListItem' onClick={() => test(2)}>{languageText.navigationList.contact}</li>
            </ul>

            {/* <li className='navigationListItem'>{languageText.introduction}</li> */}
            <LanguageChangeBox />
        </nav>
    );
}

export default Sidebar;