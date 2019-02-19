import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        // Creamos un evento para informar al resto que hay nuevos ingredientes
        // Emite el array completo
        this.ingredientsChanged = new EventEmitter();
        this.ingredients = [
            new Ingredient('Manzanas', 5),
            new Ingredient('Tomates', 10),
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        /* En vez de utilizar bucle, usaremos un evento
        for  (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }
        */
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    return ShoppingListService;
}());
export { ShoppingListService };
//# sourceMappingURL=shopping-list.service.js.map