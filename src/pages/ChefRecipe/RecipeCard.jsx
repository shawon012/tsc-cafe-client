import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating, id, image, chefrecipe, chef_picture, chef_name, chef_id, year_of_experience, number_of_recipes, likes, short_bio } = recipe;
    return (

        <Col className='col-4 gap-3  rounded mb-5'>
            <div>
                <img src={image} alt="" height='350px' width='100%' className='rounded' />
                <div>
                    <h3 className='pt-2'>{recipe_name}</h3>
                    <p>Ingredients: 1.{ingredients[0]}, 2.{ingredients[1]}, 3.{ingredients[2]}, 4.{ingredients[3]}, 5.{ingredients[4]}</p>
                    <h5>Cooking Method: {cooking_method}</h5>
                    <h5>Rating: {rating}</h5>
                </div>
            </div>
            <div>
                <Button variant="outline-success">Add To favourite</Button>
            </div>
        </Col>

    );
};

export default RecipeCard;