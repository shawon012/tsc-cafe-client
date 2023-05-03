import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

const CheifWithRec = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating, id, image, chefrecipe, chef_picture, chef_name, chef_id, year_of_experience, number_of_recipes, likes, short_bio } = recipe;
    return (
        <Container>
            {chef_name && <div className='d-flex gap="50px"  align-items-center mb-5'>
                <div>
                    {chef_picture && <img src={chef_picture} alt="" height="200px" width="250px" />}
                </div>
                <div className='ms-3 mx-auto'>
                    {chef_name && <h2>{chef_name}</h2>}
                    {short_bio && <p>{short_bio}</p>}
                    {likes && <h4>  Likes: {likes}</h4>}
                    {number_of_recipes && <h4>Number of Recipe: {number_of_recipes}</h4>}
                    {year_of_experience && <h4>Year Of Experience: {year_of_experience}</h4>}

                </div>
            </div>}


        </Container>
    );
};

export default CheifWithRec;


{/* <RecipeCard
key={id}
recipe={recipe}
></RecipeCard> */}