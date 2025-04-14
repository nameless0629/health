import React from 'react';

const HeaderBar = ({
                       onLoginClick,
                       toggleLanguage,
                       toggleFontSize,
                       lang,
                       translations,
                       fontSize,
                   }) => {
    const heightMap = { small: '40px', medium: '60px', large: '80px' };

    return (
        <div
            style={{
                backgroundColor: '#333',
                height: heightMap[fontSize],
                color: 'white',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '0 20px',
                gap: '20px',
                fontSize: fontSize === 'small' ? '12px' : fontSize === 'large' ? '20px' : '16px',
            }}
        >
            <button onClick={onLoginClick}>{translations[lang].login}</button>
            <button onClick={toggleLanguage}>{translations[lang].language}</button>
            <button onClick={toggleFontSize}>{translations[lang].fontSize}</button>
        </div>
    );
};

export default HeaderBar;
