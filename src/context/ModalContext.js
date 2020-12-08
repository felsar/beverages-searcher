import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [recipeId, setRecipeId] = useState(null);
    const [recipeetails, setRecipeDetails] = useState({});
    
    useEffect(
        () => {
            const getRecipeDetails = async () => {
                if (!recipeId) return;
                const URL_API = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`

                const recipeDetails = await axios.get(URL_API);

                setRecipeDetails(recipeDetails.data.drinks[0]);
            }
            getRecipeDetails();
        }
        , [recipeId]
    );

    return (
        <ModalContext.Provider
            value={{
                recipeetails,
                setRecipeDetails,
                setRecipeId,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;