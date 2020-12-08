import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';


//1- Create context
export const CategoriesContext = createContext();


//2 - Create Provider - Contains functions and states
const CategoriesProvider = (props) => {
    
    //3 create state
    const [categories, setCategories] = useState([]); 

    // 5 - Call API 
    useEffect(() => {
        const getCategories = async () => {
            const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categories = await Axios.get(API_URL);
            
            setCategories(categories.data.drinks)
        }

        getCategories();
    }
    , []);

    //4 Return
    return (
        <CategoriesContext.Provider
            value={{
                categories,
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;