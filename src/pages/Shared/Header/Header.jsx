import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    const location = useLocation();
    return (
        <Navbar bg="light" variant="light">
            <Container className='d-flex items-center'>
                <Nav className='d-flex'>

                    <img src="/tlogo.png" alt="" height="70px" />

                    <h3 className='mt-3'>The TSC Cafe</h3>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <NavLink className= {location.pathname === '/' ? 'active-link' : 'text'} to="/" activeClassName="active-link">
                            Home
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink className={location.pathname === '/blog' ? 'active-link' : 'text'} to="/blog" activeClassName="active-link">
                            Blog
                        </NavLink>
                    </Nav.Link>
                </Nav>
                <Nav>
                    {user ?

                        <Button onClick={handleLogOut} variant="secondary">{user.email}</Button> :
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