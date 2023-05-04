import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import './Header.css'
import { pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';
import { Document, Page, Text, pdf } from '@react-pdf/renderer';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const renderTooltip = (props) => (
        <Tooltip id="user-name-tooltip" {...props}>
            {user.displayName}
        </Tooltip>
    );
    const handleDownload = async () => {
        const pdfBlob = await pdf(
            <Document>
                <Page> <Text>Tell us the differences between uncontrolled and controlled components
                    In controlled component state manage form element value but in uncontrolled element browser does the work. However in controlled component, component render for every change but in uncontrolled component it does not render for every change. Moreover controlled component preferred for complex form and uncontrolled component preferred for simpler form.

                    How to validate React props using PropTypes
                    To validate it first we have to install props-types. Then we have to import it in component file. We have to define it adding proptype object in our component. Proptypes has different validators for different data type. When we will pass props to our component PropTypes will automatically validate them.</Text> </Page>
            </Document>
        ).toBlob();

        saveAs(pdfBlob, 'document.pdf');
    };

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
                    <Nav.Link>
                        <Button className='btn-download' onClick={handleDownload}>Download PDF</Button>
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