import './LanguageChangeBox.css'

import React, { useContext } from 'react'

import { StoreContext } from '../../store/StoreProvider'
import polish_flag from '../../resources/polish_flag.png'
import uk_flag from '../../resources/uk_flag.png'

const LanguageChangeBox = () => {

    const { currentLanguage, switchLanguage } = useContext(StoreContext);

    const flag = currentLanguage === 'pl' ? polish_flag : uk_flag;

    const imageClickHandler = () => switchLanguage();

    return (
        <div className='LanguageChangeBox'>
            <div className='FlagImageWrapper'>
                <img src={flag} alt="Country flag" onClick={imageClickHandler} className="LanguageBoxFlag" />
            </div>
        </div>
    );
}

export default LanguageChangeBox;