import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut, initializeLoginFramework, resetPasswords, signInwithEmailAndPassword } from './SignInMethods';

const Login = () => {
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

      const handleSubmit = (e) => {
            if(user.email && user.password){
                signInwithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })
            }
        e.preventDefault();
      }
      const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
          const validEmail = /\S+@\S+\.\S+/;
          isFieldValid = validEmail.test(e.target.value);
        }
        if (e.target.name === 'password') {
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
          const newUserInfo = { ...user };
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }
    return (
        <div>
            <div className="col-md-4 m-auto">
                <Card style={{ width: '100%', padding: '4%', marginTop: '150px' }}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={handleSubmit} className="mt-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" onBlur={handleBlur} name="email" style={{ border: 'none', borderBottom: '1px solid gray' }}  placeholder="username or email" required />
                            </Form.Group>

                            <Form.Group className="mt-5" controlId="formBasicPassword">
                                <Form.Control type="password" onBlur={handleBlur} name="password" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="password" required/>

                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Form.Group>
                                    <Form.Check
                                        label="Remember Me"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <a href="#" onClick={()=>resetPasswords(user.email)} style={{ color: '#F9A51A'}} >Forgot Password</a>
                                </Form.Group>
                            </div>
                            <Button className="mt-5 rounded-0" style={{ width: '100%', backgroundColor: '#F9A51A', color: 'black' }} type="submit">
                                Login
                            </Button>
                            <Form.Text className="text-center mt-3" style={{ fontSize: '17px' }}>
                                Don't have account?<Link to="/register" style={{ color: '#F9A51A' }}>Create an Account</Link>
                            </Form.Text>

                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Login;