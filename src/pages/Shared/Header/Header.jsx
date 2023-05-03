import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <Navbar bg="light" variant="light">
            <Container className='d-flex items-center'>
                <Nav className='d-flex'>

                    <img src="/tlogo.png" alt="" height="70px" />

                    <h3 className='mt-3'>The TSC Cafe</h3>
                </Nav>
                <Nav>
                    <Nav.Link href="#home"> <Link className="text-decoration-none" to="/">Home</Link> </Nav.Link>
                    <Nav.Link href="#features"> <Link className="text-decoration-none">Blog</Link> </Nav.Link>
                </Nav>
                <Nav>
                    {user ?
                        <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                        <Link to="/login">
                            <Button variant="secondary">Login</Button>
                        </Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;