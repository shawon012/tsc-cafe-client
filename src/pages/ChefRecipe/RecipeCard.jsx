import React, { useState } from 'react';
import { Button, Col, Container, Toast, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating, id, image, chefrecipe, chef_picture, chef_name, chef_id, year_of_experience, number_of_recipes, likes, short_bio } = recipe;
    const [showToast, setShowToast] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleButtonClick = () => {
        setShowToast(true);
        setButtonDisabled(true);
    };

    const handleToastClose = () => {
        setShowToast(false);
    };
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
                <Button variant="outline-success" onClick={handleButtonClick} disabled={buttonDisabled}>
                    Add To favourite
                </Button>
                <Toast show={showToast} onClose={handleToastClose}>
                    <Toast.Header>
                        <strong className="mr-auto">Favorite Recipe</strong>
                    </Toast.Header>
                    <Toast.Body>This recipe has been added to your favorites!</Toast.Body>
                </Toast>
            </div>
        </Col>

    );
};

export default RecipeCard;