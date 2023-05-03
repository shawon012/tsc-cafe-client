import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefCard = ({ chef }) => {
    const { chef_picture, chef_name, chef_id, year_of_experience, number_of_recipes, likes, short_bio } = chef
    return (
                <Col className='col-4 gap-3  rounded mb-5'>
                    <div className=''>
                        <img src={chef_picture} alt="" height='350px' width='100%' className='rounded' />
                        <div className=''>
                            <h3 className='pt-2'>{chef_name}</h3>
                            <h4>Year of Experience: {year_of_experience}</h4>
                            <h5>Number of Recipies: {number_of_recipes}</h5>
                            <h5>Likes: {likes}</h5>
                        </div>
                    </div>
                    <div>
                        <Button variant="outline-success">View Recipe</Button>
                    </div>
                </Col>
           
    );
};

export default ChefCard;

