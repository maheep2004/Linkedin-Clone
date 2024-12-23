import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <img src="/linkedin-logo.png.png" alt="LinkedIn Logo" className="logo" />
                <div className="header-actions">
                    <Link to="/login" className="sign-in-button">Sign in</Link>
                </div>
            </header>
            <main className="main-content">
                <div className="welcome-section">
                    <h1>Welcome to your professional community</h1>
                    <p className="terms">
                        By clicking Continue to join or sign in, you agree to LinkedIn’s{' '}
                        <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
                    </p>
                </div>
            </main>
            <footer className="footer">
                <a href="#">Join now</a>
            </footer>
        </div>
    );
};

export default Home;
