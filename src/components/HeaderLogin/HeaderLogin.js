import React, { useContext, useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../images/Logo.png';
import { handleSignOut, initializeLoginFramework } from '../Login/SignInMethods';
const HeaderLogin = () => {
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
    const signOut = () =>{
        handleSignOut()
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
    }
    return (
        <>
             <Navbar expand="lg" style={{margin: '0% 9%'}} fixed="top">
                <Navbar.Brand href="#Home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="ml-auto">
                        <Nav.Link className="mx-4 text-dark"> <strong><Link to="/" className="text-light">News</Link></strong></Nav.Link>
                        <Nav.Link className="mx-4 text-dark"><strong><Link to="/destination" className="text-light">Destination</Link></strong></Nav.Link>
                        <Nav.Link className="mx-4 text-dark"><strong>Blog</strong></Nav.Link>
                        <Nav.Link className="mx-4 text-dark"><strong>Contact</strong></Nav.Link>
                        {
                            loggedInUser.email ? <Button onClick={signOut} style={{backgroundColor:'#F9A51A',color:'black'}} className="px-5 mx-5"><strong>Sign out</strong></Button> :
                            <Button style={{backgroundColor:'#F9A51A',color:'black'}} className="px-5 mx-5"><strong>Login</strong></Button>
                        } 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        </>
    );
};

export default HeaderLogin;