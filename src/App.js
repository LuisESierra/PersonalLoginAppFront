// client/src/App.js

import React from 'react';
import './App.css';
import Register from './Register';
import QRCodeDisplay from './QRCodeDisplay';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Register />
                <QRCodeDisplay />
            </header>
        </div>
    );
}

export default App;
