import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ChefCard = ({ chef }) => {
    const { chef_picture, chef_name, chef_id, year_of_experience, number_of_recipes, likes, short_bio } = chef
    return (
        <div>
            <div className=' border border-primary rounded mb-4 d-flex align-items-center pe-4'>
                <div className='flex-grow-1 d-flex gap-3'>
                    <img src={chef_picture} alt="" height='350px' width='300px' className='rounded' />
                    <div className=''>
                        <h3 className='pt-5'>{chef_name}</h3>
                        <h4>Year of Experience: {year_of_experience}</h4>
                        <h5>Number of Recipies: {number_of_recipes}</h5>
                        <h5>Likes: {likes}</h5>
                    </div>
                </div>
                <div>
                    <Button variant="outline-success">View Recipe</Button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard; 


