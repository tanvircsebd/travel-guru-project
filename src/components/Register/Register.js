import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createSignInWithEmailAndPassword, initializeLoginFramework } from '../Login/SignInMethods';

const Register = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',
        error: '',
        success: false
    });
    initializeLoginFramework();
    const [isValidConfirmPassword, setIsvalidConfirmPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (e) => {
        if (user.confirmPassword !== user.password) {
            setIsvalidConfirmPassword('Password is not matched');
        } else {
            if (user.email && user.password) {
                const name = user.firstname + ' ' + user.lastname;
                createSignInWithEmailAndPassword(name, user.email, user.password)
                    .then(res => {
                        setUser(res);
                        setLoggedInUser(res);
                    })

            }
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
            let password = e.target.value;
            const isPasswordValid = password.length > 6;
            const passwordHasNumber = /\d{1}/.test(password);
            isFieldValid = isPasswordValid && passwordHasNumber;

        }
        if (e.target.name === 'confirmPassword') {
            let confirmPassword = e.target.value;
            const isPasswordValid = confirmPassword.length > 6;
            const passwordHasNumber = /\d{1}/.test(confirmPassword);
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
                        <Card.Title>Create an account</Card.Title>
                        <Form onSubmit={handleSubmit} className="mt-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" onBlur={handleBlur} name="firstname" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="first name" required />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="text" onBlur={handleBlur} name="lastname" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="last name" required />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="email" onBlur={handleBlur} name="email" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Username or Email" required />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="password" onBlur={handleBlur} name="password" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Control type="password" onBlur={handleBlur} name="confirmPassword" style={{ border: 'none', borderBottom: '1px solid gray' }} placeholder="Confirm Password" required />
                            </Form.Group>
                            <Form.Text className="text-danger">
                                {
                                    isValidConfirmPassword
                                }
                            </Form.Text>
                            <Button className="mt-4 rounded-0" style={{ width: '100%', backgroundColor: '#F9A51A', color: 'black' }} type="submit">
                                Create an Account
                            </Button>


                            <Form.Text className="text-center mt-3" style={{ fontSize: '17px' }}>
                                Already have account?<Link to="/login" style={{ color: '#F9A51A' }}>Login</Link>
                            </Form.Text>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Register;