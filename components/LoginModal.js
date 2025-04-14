import React from 'react';

const modalStyle = {
    position: 'fixed',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#444',
    color: 'white',
    padding: '30px',
    borderRadius: '10px',
    zIndex: 1000,
};

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
};

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <div style={overlayStyle} onClick={onClose}></div>
            <div style={modalStyle}>
                <h2>登入</h2>
                <input type="text" placeholder="帳號" />
                <br />
                <input type="password" placeholder="密碼" />
                <br />
                <button onClick={onClose}>關閉</button>
            </div>
        </>
    );
};

export default LoginModal;
