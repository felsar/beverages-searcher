import React from 'react';

import Header from './componenets/Header';
import BeverageSearchForm from './componenets/BeverageSearchForm';
import RecipeList from './componenets/RecipeList'

import CategoriesProvider from './context/CategoriesContext'
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <div className="App">
            <Header />
            <div className="container mt-5">
              <div className="row">
                <BeverageSearchForm />
                <RecipeList />
              </div>
            </div>
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
