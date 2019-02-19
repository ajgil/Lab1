import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
        this.recipes = [];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RecipeService])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
export { RecipeListComponent };
//# sourceMappingURL=recipe-list.component.js.map