import React from 'react';

import ItemList from '../item-list';

const RecipeDetails = ({ recipe = {} }) => {
  return(
    <div className="recipe-details">
      <header>
        <h2 className="recipe-details__title">{recipe.title}</h2>
      </header>
      <div>
        <h3>Ingridients:</h3>
        <ul>
          <ItemList items={recipe.ingridients} />
        </ul>
        <h3>Directions:</h3>
        <ol>
          <ItemList items={recipe.directions} />
        </ol>
      </div>
    </div> 
  )
};

export default RecipeDetails;