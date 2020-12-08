import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import Axios from 'axios';

//1- Create context
export const RecipesContext = createContext();

//2 - Create Provider - Contains functions and states
const RecipesProvider = (props) => {
    //3 create states
    const [searchRecipe, setSearchRecipe] = useState({
        name: '',
        category: '',
    });

    const [recipeResult, setRecipeResult] = useState([]);

    const [doQuery, setDoQuery] = useState(false);

    //Call API
    useEffect(() => { 
        if (doQuery) {
            const getRecipe = async () => {
                const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchRecipe.name}&c=${searchRecipe.category}`;

                const apiResult = await Axios.get(API_URL);

                setRecipeResult(apiResult.data.drinks);
                

            }
            getRecipe();
            setDoQuery(false);
        }
        

       
    }
    , [searchRecipe]);

    //4 Return
    return ( 
        <RecipesContext.Provider
            value={{
                recipeResult,
                setSearchRecipe,
                setDoQuery,
            }}
        >
            {props.children}
        </RecipesContext.Provider>
     );
}
 
export default RecipesProvider;

