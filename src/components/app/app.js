import React from 'react';

import recipes from '../../recipes';
import RecipeBoxService from '../../services/recipeBox-service';

import RecipeList from '../recipe-list';
import RecipeDetails from '../recipe-details';

class App extends React.Component {
  constructor(props) {
    super(props);

    this._recipeBoxService = new RecipeBoxService();

    this.state = {
      recipes: [],
      recipe: null
    }

    this.chooseRecipe = this.chooseRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    this._recipeBoxService.getRecipes()
      .then(recipes => {
        this.setState({
          recipes: recipes,
          recipe: recipes[0]
        })
      });
  }

  chooseRecipe(id) {
    const recipe = this.state.recipes.find(item => item.id === id);

    this.setState({
      recipe
    });
  }

  render() {

    const { recipes, recipe } = this.state;

    const recipeDetails = recipe !== null ? <RecipeDetails recipe={recipe} /> : null;

    return(
      <div className="recipe-box">
        <div className="container">
          <h1>Recipe Box</h1>
          <RecipeList recipes={recipes} chooseRecipe={this.chooseRecipe} recipe={recipe} />
          {recipeDetails}
        </div>
      </div>
    )
  }
}

export default App;