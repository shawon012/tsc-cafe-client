import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container>
            <div className="position-relative">
                <Image src='/The TSC CaFE.png' alt="My Image" className="img-fluid" height='100%' width='100%' />
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className='fs-1 fw-bold text-danger text-center text-bg-light'>The TSC Cafe</h1>
                    <p className='text-center text-light'> <small>Delicious Food For Every Mood</small> </p>
                    <div className='text-center'><Button variant="outline-info">Learn More</Button></div>
                </div>
            </div>
            <div>
                <div className='text-center mt-5'>
                    <h3>Who Are Our Chef!</h3>
                    <p>Curious? Here are our most popular chefs</p>
                </div>
                <div>
                   
                </div>
            </div>
        </Container>
    );
};

export default Home;