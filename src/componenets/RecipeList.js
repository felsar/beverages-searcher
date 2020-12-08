import React, { useContext } from 'react';

import Recipe from './Recipe'

import { RecipesContext } from '..//context/RecipesContext';


const RecipeList = () => {

    const { recipeResult } = useContext(RecipesContext);

    return ( 
        <div className="row mt-5">
            {recipeResult.map(
                recipe => (
                    <Recipe
                        key={recipe.idDrink}
                        recipe={recipe}
                    />
                )
            )}
        </div>
     );
}
 
export default RecipeList;