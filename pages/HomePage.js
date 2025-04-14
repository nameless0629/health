import React, { useState } from 'react';
import HeaderBar from '../components/HeaderBar';
import LoginModal from '../components/LoginModal';
import { translations } from '../i18n';

const HomePage = ({ navigate }) => {
    const [lang, setLang] = useState('zh');
    const [fontSize, setFontSize] = useState('medium'); // 'small' | 'medium' | 'large'
    const [isLoginOpen, setLoginOpen] = useState(false);

    const toggleLanguage = () => {
        setLang(prev => (prev === 'zh' ? 'en' : 'zh'));
    };

    const toggleFontSize = () => {
        setFontSize(prev =>
            prev === 'medium' ? 'large' : prev === 'large' ? 'small' : 'medium'
        );
    };

    const sizeMap = {
        small: '14px',
        medium: '24px',
        large: '36px',
    };

    return (
        <div style={{ color: 'white', textAlign: 'center' }}>
            <HeaderBar
                onLoginClick={() => setLoginOpen(true)}
                toggleLanguage={toggleLanguage}
                toggleFontSize={toggleFontSize}
                lang={lang}
                translations={translations}
                fontSize={fontSize}
            />
            <div style={{ fontSize: sizeMap[fontSize], marginTop: '20%' }}>
                {translations[lang].title}
            </div>
            <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
        </div>
    );
};

export default HomePage;
