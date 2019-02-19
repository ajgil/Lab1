import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.recipeSelected
            .subscribe(function (recipe) {
            _this.selectedRecipe = recipe;
        });
    };
    RecipesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-recipes',
            templateUrl: './recipes.component.html',
            styleUrls: ['./recipes.component.css'],
            providers: [RecipeService]
        }),
        tslib_1.__metadata("design:paramtypes", [RecipeService])
    ], RecipesComponent);
    return RecipesComponent;
}());
export { RecipesComponent };
//# sourceMappingURL=recipes.component.js.map