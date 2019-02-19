import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    RecipeItemComponent.prototype.onSelected = function () {
        this.recipeService.recipeSelected.emit(this.recipe);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Recipe)
    ], RecipeItemComponent.prototype, "recipe", void 0);
    RecipeItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-recipe-item',
            templateUrl: './recipe-item.component.html',
            styleUrls: ['./recipe-item.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RecipeService])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());
export { RecipeItemComponent };
//# sourceMappingURL=recipe-item.component.js.map