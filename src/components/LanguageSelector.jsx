import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ onSelect }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        onSelect();
    };

    return (
        <div>
            <button onClick={() => changeLanguage('ja')}>日本語</button>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ko')}>한국어</button>
        </div>
    );
};

export default LanguageSelector;
