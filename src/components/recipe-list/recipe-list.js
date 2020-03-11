import React from 'react';

import RecipeListItem from '../recipe-list-item';

const RecipeList = ({ recipes, chooseRecipe, recipe }) => {
  return(
    <div className="recipe-list">
      {recipes.map(({id, title }) => <RecipeListItem id={id} title={title} recipe={recipe} chooseRecipe={chooseRecipe} />)}
    </div>
  )
}

export default RecipeList;