import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState(null); // State to store user information

    const handleSuccess = async (credentialResponse) => {
        try {
            const response = await axios.post('http://localhost:5054/auth/google/callback', {
                tokenId: credentialResponse.credential,
            });

            console.log('Login Successful:', response.data);
            setUser(response.data); // Store user info (e.g., email, name)
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleError = () => {
        console.error('Google login failed');
    };

    const handleLogout = () => {
        googleLogout(); // Clears Google session
        setUser(null); // Clear user info from state
        alert('Logged out successfully!');
    };

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                {!user ? (
                    <>
                        <h1>Welcome to LinkedIn Clone</h1>
                        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                    </>
                ) : (
                    <>
                        <h1>Welcome, {user.email}!</h1>
                        <button onClick={handleLogout} style={{ padding: '10px 20px', marginTop: '20px' }}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </GoogleOAuthProvider>
    );
};

export default Home;
