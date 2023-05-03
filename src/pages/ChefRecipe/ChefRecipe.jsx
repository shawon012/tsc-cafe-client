import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheifWithRec from './CheifWithRec';

const ChefRecipe = () => {
    const chefAndRecipe = useLoaderData()
    return (
        <div>
            {
                chefAndRecipe.map(recipe => <CheifWithRec
                key={recipe.id}
                recipe ={recipe}
                
                ></CheifWithRec>)
            }
        </div>
    );
};

export default ChefRecipe;