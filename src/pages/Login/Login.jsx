import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState(null);

    const handleLogin = event => {
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const googleLogin = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const githubLogin = () => {
        signInGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h2 className='mt-4'>Please Login</h2>
            <Form onSubmit={handleLogin} className='mt-2 pb-5 mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p><small>New To TSC Cafe? Please <Link to='/register'>Register!</Link></small></p>
                {error && <p className='text-danger'>{error}</p> }
                <Button variant="primary" type="submit" className='mb-4'>
                    Submit
                </Button>
                <div className='d-flex  align-items-center'>
                    <div onClick={googleLogin} className='pe-5'>
                        <img src="/google.jpg" alt="" height='30px' width="30px" />
                        <p >Google</p>
                    </div>
                    <div onClick={githubLogin}>
                        <img src="/github.jpg" alt="" height='30px' width="30px" />
                        <p >Github</p>
                    </div>
                </div>
            </Form>

        </Container>
    );
};

export default Login;