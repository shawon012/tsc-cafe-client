import React from 'react';
import './Hooter.css';
import { Container, Navbar } from 'react-bootstrap';

const Hooter = () => {
    return (
        <div className='bg-secondary'>
            <Container  className="d-flex flex-column flex-md-row justify-content-between align-items-center width='100%'">
            <div className='text-black ps-3 pt-3 pe-3'>
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
            <div className='text-black ps-3 pt-3 pe-3'>
                <h1>Our Branches</h1> <br />
                <div>
                    <h4>Head Office</h4>
                    <p>California, USA</p>
                </div>
                <div>
                    <h4>NewYork Office</h4>
                    <p>123 Street, 564 Lane</p>
                </div>
                <div>
                    <h4>Our Lab</h4>
                    <p>Columbia, 542 Street</p>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Hooter;