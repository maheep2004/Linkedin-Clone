import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
    const handleSuccess = async (credentialResponse) => {
        console.log('Google login success:', credentialResponse);

        try {
            const response = await axios.post('http://localhost:5054/auth/google/callback', {
                tokenId: credentialResponse.credential,
            });
            console.log('Server response:', response.data);
            alert(`Welcome ${response.data.email}!`);
        } catch (error) {
            console.error('Error sending token to backend:', error);
        }
    };

    const handleError = () => {
        console.error('Google Login Failed');
    };

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Login</h1>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
