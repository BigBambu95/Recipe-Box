import recipes from '../recipes';

export default class RecipeBoxService {

  getRecipes() {
    return Promise.resolve(recipes);
  }
}