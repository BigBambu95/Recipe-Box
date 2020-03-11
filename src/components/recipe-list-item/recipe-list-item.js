import React from 'react';


const RecipeListItem = ({ id, title, recipe, chooseRecipe }) => {
    const clazz = recipe.id === id ? 'recipe-list__item active' : 'recipe-list__item';
    return(
        <div className={clazz} key={id} onClick={() => chooseRecipe(id)}>
            {title}
        </div>
    )
}

export default RecipeListItem;