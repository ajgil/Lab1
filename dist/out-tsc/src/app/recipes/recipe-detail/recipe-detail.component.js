import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Recipe)
    ], RecipeDetailComponent.prototype, "recipe", void 0);
    RecipeDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-recipe-detail',
            templateUrl: './recipe-detail.component.html',
            styleUrls: ['./recipe-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RecipeService])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
export { RecipeDetailComponent };
//# sourceMappingURL=recipe-detail.component.js.map