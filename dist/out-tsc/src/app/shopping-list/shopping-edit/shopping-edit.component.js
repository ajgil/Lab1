import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(slsService) {
        this.slsService = slsService;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent.prototype.onAddItem = function () {
        var ingName = this.nameInputRef.nativeElement.value;
        var ingAmount = this.amountInputRef.nativeElement.value;
        var newIngredient = new Ingredient(ingAmount, ingName);
        this.slsService.addIngredient(newIngredient);
    };
    tslib_1.__decorate([
        ViewChild('nameInput'),
        tslib_1.__metadata("design:type", ElementRef)
    ], ShoppingEditComponent.prototype, "nameInputRef", void 0);
    tslib_1.__decorate([
        ViewChild('amountInput'),
        tslib_1.__metadata("design:type", ElementRef)
    ], ShoppingEditComponent.prototype, "amountInputRef", void 0);
    ShoppingEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shopping-edit',
            templateUrl: './shopping-edit.component.html',
            styleUrls: ['./shopping-edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ShoppingListService])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());
export { ShoppingEditComponent };
//# sourceMappingURL=shopping-edit.component.js.map