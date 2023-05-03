import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../ChefCard/ChefCard';

const Home = () => {
    const chefs = useLoaderData();
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
                    <Container>
                        <Row>
                            {
                                chefs.map(chef => <ChefCard
                                    key={chef.chef_id}
                                    chef={chef}
                                ></ChefCard>)
                            }
                        </Row>
                    </Container>
                </div>
            </div>
            <div>
                <div className='text-center mt-5'>
                    <h3>What Our Clients Say!</h3>
                    <p>Learn Review from Our Previous Clients And Be Confident</p>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col className='col-4 gap-3  rounded mb-5'>
                                <div className=''>
                                    <img src={`https://images.unsplash.com/photo-1682997843688-94722786a722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`} alt="" height='350px' width='100%' className='rounded' />
                                    <div className=''>
                                        <h4>Very good service all the time. I am regularly taking service from here. This is one of the bes cafe.</h4>
                                        <h3 className='pt-2'>Honey Lonne</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-4 gap-3  rounded mb-5'>
                                <div className=''>
                                    <img src={`https://images.unsplash.com/photo-1682862261357-31c4ec647807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`} alt="" height='350px' width='100%' className='rounded' />
                                    <div className=''>
                                        <h4>However I like the test of the food from this cafe very much. Specially burger is liked by me very much.</h4>
                                        <h3 className='pt-2'>Julia Cirea</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-4 gap-3  rounded mb-5'>
                                <div className=''>
                                    <img src={`https://images.unsplash.com/photo-1682997843692-c3cf1cb9caf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`} alt="" height='350px' width='100%' className='rounded' />
                                    <div className=''>
                                        <h4>I always like food. But this cafe is just doing good. I like the cheese cake most. But other recipies are also good.</h4>
                                        <h3 className='pt-2'>Ciara Jara</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </Container>
    );
};

export default Home;