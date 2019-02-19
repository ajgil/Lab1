import * as tslib_1 from "tslib";
import { Directive, HostListener, HostBinding } from '@angular/core';
var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toogleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    tslib_1.__decorate([
        HostBinding('class.open'),
        tslib_1.__metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    tslib_1.__decorate([
        HostListener('click'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toogleOpen", null);
    DropdownDirective = tslib_1.__decorate([
        Directive({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());
export { DropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map