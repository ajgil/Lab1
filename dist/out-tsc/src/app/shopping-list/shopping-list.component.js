import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.slService.getIngredients();
        // Nos suscribimos al evento de ingredientes
        this.slService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shopping-list',
            templateUrl: './shopping-list.component.html',
            styleUrls: ['./shopping-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ShoppingListService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
export { ShoppingListComponent };
//# sourceMappingURL=shopping-list.component.js.map