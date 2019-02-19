import * as tslib_1 from "tslib";
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
var RecipeService = /** @class */ (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipeSelected = new EventEmitter();
        this.recipes = [
            new Recipe('Brocheta Dummy', 'Receta para dummies', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Brocheta-frutas-recetas-faciles-ninos.jpg', [
                new Ingredient('Frutas variadas', 4),
                new Ingredient('Caramelo', 1)
            ]),
            new Recipe('Burger Dummy', 'Burguer dummies 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tomato_Sugo_Burger_With_Rocket_Cheese_%28164927095%29.jpeg/800px-Tomato_Sugo_Burger_With_Rocket_Cheese_%28164927095%29.jpeg', [
                new Ingredient('pan', 1),
                new Ingredient('queso rocket', 1),
                new Ingredient('tomate', 1),
                new Ingredient('carne de ternera', 1)
            ]),
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    RecipeService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ShoppingListService])
    ], RecipeService);
    return RecipeService;
}());
export { RecipeService };
//# sourceMappingURL=recipe.service.js.map