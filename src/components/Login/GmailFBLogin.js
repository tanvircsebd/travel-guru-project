import React, { useContext, useState } from 'react';
import googleLogo from '../images/Icon/google.png'
import fbLogo from '../images/Icon/fb.png'
import { handleFBSignIn, handleGoogleSignIn, initializeLoginFramework } from './SignInMethods';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const GmailFBLogin = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            setUser(res)
            setLoggedInUser(res)
            history.replace(from);
        })
    }
    const FbSignIn = () => {
        handleFBSignIn()
        .then(res => {
            setUser(res)
            setLoggedInUser(res)
            history.replace(from);
        })
    }

    const signInBtnStyle = {
        width: '100%',
        border: '1px solid gray',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: '10px'
    }
    return (
        <div className="col-md-3 m-auto">
            <div className="row m-auto">
                <div style={{ borderBottom: '1px solid gray', width: '48%' }}></div>
                or
                <div style={{ borderBottom: '1px solid gray', width: '48%' }}></div>
            </div>
            <div className="mt-4">
                <button onClick={FbSignIn} style={signInBtnStyle}><img src={fbLogo} className="float-left py-1" alt="" /> Continue with Facebook</button>
                <button onClick={googleSignIn} style={signInBtnStyle}><img src={googleLogo} className="float-left py-1" alt="" />Continue with Google</button>
            </div>
        </div>
    );
};

export default GmailFBLogin;