import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <Container className="my-5 d-flex">
            <div className='flex-grow-1'>
                <h1>404 - Page not found</h1>
                <p>The page you are looking for could not be found.</p>
                <Link to="/">
                    <Button variant="primary">
                        Return to homepage
                    </Button>
                </Link>
            </div>
            <div >
                <img src="/not.jpg" alt="" width="700px"/>
            </div>
        </Container>
    );
};

export default Notfound;