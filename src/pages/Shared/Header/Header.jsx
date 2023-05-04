import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const renderTooltip = (props) => (
        <Tooltip id="user-name-tooltip" {...props}>
            {user.displayName}
        </Tooltip>
    );

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
                        <NavLink className={location.pathname === '/' ? 'active-link' : 'text'} to="/" activeClassName="active-link">
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
                    {user ? (
                        <div className='d-flex'>
                            <div className='me-3'>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <img
                                        src={user.photoURL} // replace with actual user's profile picture
                                        alt="Profile Picture"
                                        className="rounded-circle mr-2"
                                        width="40"
                                        height="40"
                                    />

                                </OverlayTrigger>
                            </div>
                            <div>
                                <Button onClick={handleLogOut} variant="secondary" className='texta'> <Link className='textaa' >Logout</Link> </Button>
                            </div>
                        </div>

                    ) : (
                        <Button className='texta' variant="secondary"> <Link className='textaa' to="/login">Login</Link> </Button>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;