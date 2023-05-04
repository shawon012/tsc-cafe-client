import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { chef_picture, chef_name, chef_id, year_of_experience, number_of_recipes, likes, short_bio } = chef
    return (
        <Col xs={12} md={4} className='gap-3  rounded mb-5'>
            <div>
                <div>
                <LazyLoad height={350} offset={200} debounce={1500}>
                    <img src={chef_picture} alt="" height='350px' width='100%' className='rounded' />
                </LazyLoad>
                </div>


                <div className=''>
                    <h3 className='pt-2'>{chef_name}</h3>
                    <h4>Year of Experience: {year_of_experience}</h4>
                    <h5>Number of Recipies: {number_of_recipes}</h5>
                    <h5>Likes: {likes}</h5>
                </div>
            </div>
            <div>
                <Link to={`/chefRecipe/${chef_id}`}> <Button variant="outline-success">View Recipe</Button></Link>
            </div>
        </Col>

    );
};

export default ChefCard;


