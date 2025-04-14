import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import VitalSignsPage from './pages/VitalSignsPage';
import './styles/background.css';

function App() {
    const [page, setPage] = useState('home');

    return (
        <>
            {page === 'home' ? <HomePage navigate={setPage} /> : <VitalSignsPage navigate={setPage} />}
        </>
    );
}

export default App;
