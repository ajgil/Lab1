import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
    new Recipe('Receta Dummy', 'Esta receta es para dummies',
    'https://upload.wikimedia.org/wikipedia/commons/2/27/Brocheta-frutas-recetas-faciles-ninos.jpg'),
    new Recipe('Receta Dummy', 'Receta para dummies 2',
    'https://upload.wikimedia.org/wikipedia/commons/2/27/Brocheta-frutas-recetas-faciles-ninos.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
