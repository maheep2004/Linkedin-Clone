import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Home component
import Login from './components/Login'; // Login component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Default Home Page */}
                <Route path="/login" element={<Login />} /> {/* Login Page */}
            </Routes>
        </Router>
    );
};

export default App;
