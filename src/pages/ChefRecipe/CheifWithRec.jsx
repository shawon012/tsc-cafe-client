import React from 'react';

const CheifWithRec = ({recipe}) => {
    const {recipe_name} = recipe;
    return (
        <div>
            <h2>This is the each page for show recipe: {recipe_name}</h2>
        </div>
    );
};

export default CheifWithRec;