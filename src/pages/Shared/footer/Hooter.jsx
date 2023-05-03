import React from 'react';
import './Hooter.css';
import { Container } from 'react-bootstrap';

const Hooter = () => {
    return (
        <Container className="bg-white d-flex align-items-center width='100%'">
           <div className='text-black p-5 flex-grow-1'>
                <h1>Contact Us</h1> <br />
                <div>
                    <h4>Mailing Address</h4>
                    <p>123, New City, St 1234</p>
                </div>
                <div>
                    <h3>Email Address</h3>
                    <p>hrd345@reallygreat.com</p>
                </div>
                <div>
                    <h3>Phone Number</h3>
                    <p>(123) 456-7890</p>
                </div>
           </div>
           <div className='pe-5 me-5'>
            <img src="/tlogo.png" alt="" />
           </div>
        </Container>
    );
};

export default Hooter;