import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheifWithRec from './CheifWithRec';
import RecipeCard from './RecipeCard';
import { Container, Row } from 'react-bootstrap';

const ChefRecipe = () => {
    const chefAndRecipe = useLoaderData()
    return (
        <div>
            <div>
                {
                    chefAndRecipe.map(recipe => <CheifWithRec
                        key={recipe.id}
                        recipe={recipe}

                    ></CheifWithRec>)
                }
            </div>
            <div>

                <Container>
                    <Row>
                        {chefAndRecipe.map(recipe => <RecipeCard
                            key={recipe.id}
                            recipe={recipe}

                        ></RecipeCard>)
                        }
                    </Row>
                </Container>


            </div>
        </div>

    );
};

export default ChefRecipe;