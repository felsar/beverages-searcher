import React, { useContext, useState } from 'react';

import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext} from '..//context/RecipesContext';

const BeverageSearchForm = () => {

    const { categories } = useContext(CategoriesContext);
    // from context
    const { setSearchRecipe, setDoQuery } = useContext(RecipesContext);

    const [search, setSearch] = useState({
        name: '',
       category:'' 
    })
    const getRecipe = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        } );
    }

    return ( 
        <form className="col-12"
            onSubmit={e => {
                e.preventDefault();
                setSearchRecipe(search);
                setDoQuery(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Search Beverages by Category or Ingredients</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Ingredients"
                        onChange={getRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getRecipe}
                    >
                        <option value="">Select Category</option>
                        {categories.map(
                            (category) => (
                                <option value={category.strCategory}key={category.strCategory}>{category.strCategory} </option>
                            )
                        )}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default BeverageSearchForm;