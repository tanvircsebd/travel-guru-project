import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div style={{paddingBottom:'70%'}}>
            <Card border="primary" style={{ width: '100%', padding: '4%'}}>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" placeholder="Your location" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder="Destination" />
                        </Form.Group>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group  controlId="formBasicPassword">
                                    <Form.Label>Form</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group  controlId="formBasicPassword">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>
                            </div>
                            
                        </div>
                        <Link to="/destination">
                        <Button style={{ width: '100%', backgroundColor: '#F9A51A',color:'black' }} type="submit">
                            Start Booking
                        </Button>
                        </Link>
                        
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;